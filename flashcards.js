const fs = require('fs-extra');
const path = require('path');
const PDFDocument = require('pdfkit');
const { getWildlifeFact } = require('./facts');
const { getImageUrl, downloadImage } = require('./imageFetchers');

/**
 * Generates flashcards PDF from input labels, fetching facts and images as needed.
 * @param {string} folder - The folder containing input.txt and where output will be saved.
 */
async function generateFlashcards(folder) {
  const inputPath = path.join(folder, 'input.txt');
  const factPath = path.join(folder, 'facts.json');
  // Load existing facts if available, otherwise start with empty object
  const facts = (await fs.pathExists(factPath)) ? await fs.readJson(factPath) : {};

  // Read all labels from input.txt, trimming whitespace and skipping empty lines
  const allLabels = (await fs.readFile(inputPath, 'utf8'))
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean);

  // Remove facts and images for items not in input.txt
  for (const label of Object.keys(facts)) {
    if (!allLabels.includes(label)) {
      // Remove image file if it exists
      if (facts[label].imagePath && await fs.pathExists(facts[label].imagePath)) {
        await fs.remove(facts[label].imagePath);
      }
      delete facts[label];
    }
  }

  // Find new labels that need facts or images fetched
  const newLabels = allLabels.filter(label => !facts[label] || !facts[label].imagePath);

  // Fetch facts and images for new labels
  for (const label of newLabels) {
    console.log(`🔍 Fetching new data for: ${label}`);
    const factDataRaw = await getWildlifeFact(label);
    const factData = factDataRaw[label] || factDataRaw;
    const { url } = await getImageUrl(label);

    if (factData && url) {
      // Save image to disk and update fact data with image path
      const fileName = `${allLabels.indexOf(label)}_${label.replace(/\s+/g, '_')}.jpg`;
      const imagePath = path.join(folder, fileName);
      const savedPath = await downloadImage(url, imagePath);
      factData.imagePath = savedPath;
      facts[label] = factData;
      await fs.writeJson(factPath, facts, { spaces: 2 });
    }
  }

  // Save updated facts to disk
  await fs.writeJson(factPath, facts, { spaces: 2 });

  // Prepare output directory for flashcards PDF
  const flashDir = path.join(folder, 'flashcards');
  await fs.ensureDir(flashDir);

  // Create a new PDF document for flashcards
  const doc = new PDFDocument({ size: 'A4', margin: 20 });
  doc.pipe(fs.createWriteStream(path.join(flashDir, 'flashcards.pdf')));

  // Layout constants for flashcard size and positioning
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const cardWidth = pageWidth - 60;
  const cardHeight = (pageHeight - 80) / 3;
  let x = 30, y = 30, count = 0;

  // Render each flashcard
  for (const label of allLabels) {
    if (!facts[label]) continue;
    // Add new page every 3 cards
    if (count > 0 && count % 3 === 0) {
      doc.addPage();
      x = 30;
      y = 30;
    }

    const card = facts[label];

    // Unwrap malformed GPT responses if needed
    if (!Array.isArray(card.facts) && typeof card[label] === 'object') {
      facts[label] = card[label];
    }

    const current = facts[label];

    // Draw card border
    doc.rect(x, y, cardWidth, cardHeight).stroke();

    // Layout for image and text
    const padding = 10;
    const imgWidth = 100;
    const imgHeight = 100;
    const textX = x + padding + imgWidth + padding;
    const textWidth = cardWidth - imgWidth - 3 * padding;

    let textY = y + padding;
    const imgPath = current.imagePath;
    // Draw image if available
    if (imgPath && await fs.pathExists(imgPath)) {
      try {
        doc.image(imgPath, x + padding, y + padding, {
          width: imgWidth,
          height: imgHeight,
          fit: [imgWidth, imgHeight]
        });
      } catch (e) {
        console.warn(`⚠️ Could not load image for ${label}`);
      }
    }

    // Draw label (title)
    doc.fontSize(14).text(label, textX, textY, {
      width: textWidth,
      align: 'left'
    });
    textY += 20;

    // Draw facts as bullet points
    const factText = Array.isArray(current.facts)
      ? current.facts.map(f => `• (${f.factGroup}) ${f.fact}`).join('\n')
      : 'No facts available.';
    doc.fontSize(11).text(factText, textX, textY, {
      width: textWidth
    });

    // Draw dependency info if present
    if (current.dependsOn && current.dependsOn.item && current.dependsOn.reason) {
      const dependencyText = `Depends on: ${current.dependsOn.item}\nReason: ${current.dependsOn.reason}`;
      doc.moveDown();
      doc.fontSize(9).fillColor('gray').text(dependencyText, x + padding, doc.y + 5, {
        width: cardWidth - 2 * padding
      }).fillColor('black');
    }

    // Move to next card position
    y += cardHeight + 10;
    count++;
  }

  // Finalize PDF
  doc.end();
  console.log(`✅ Flashcards saved.`);
}

module.exports = { generateFlashcards };