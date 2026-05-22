const fs = require('fs-extra');
const path = require('path');
const PDFDocument = require('pdfkit');
const { shuffle } = require('lodash');
const sharp = require('sharp');
const promptUser = require('./promptUser');
const pdf = require('pdf-poppler');

async function generateBingoBoards(folder) {
  const baseFolder = path.resolve(folder);
  const factPath = path.join(baseFolder, 'facts.json');

  if (!fs.existsSync(factPath)) {
    console.error(`✗ Cannot find facts.json in ${baseFolder}`);
    return;
  }

  const facts = await fs.readJson(factPath);
  const images = [];

  for (const [label, data] of Object.entries(facts)) {
    try {
      const resolvedPath = path.resolve(baseFolder, data.imagePath);
      const normalizedPath = resolvedPath.replace(/\\/g, '/');

      if (fs.existsSync(normalizedPath)) {
        await sharp(normalizedPath).metadata();
        images.push([label, { ...data, imagePath: normalizedPath }]);
      } else {
        console.warn(`⚠️ Not found: ${normalizedPath}`);
      }
    } catch {
      console.warn(`⚠️ Skipping invalid image for ${label}: ${data.imagePath}`);
    }
  }

  const nBoards = parseInt(await promptUser('How many boards? '), 10);
  const bingoDir = path.join(baseFolder, 'bingo');
  const jpegDir = path.join(bingoDir, 'JPEGS');
  const a4Dir = path.join(bingoDir, 'A4_PDFS');
  await fs.ensureDir(bingoDir);
  await fs.ensureDir(jpegDir);
  await fs.ensureDir(a4Dir);

  for (let i = 0; i < nBoards; i++) {
    let availableImages = [...images];
    const shuffled = shuffle(availableImages).slice(0, 25);
    const usedLabels = new Set();

    const pageWidth = 720;
    const pageHeight = 576;
    const cellWidth = pageWidth / 5;
    const cellHeight = pageHeight / 5;
    const imageHeight = cellHeight - 20;

    const generateBoard = (outputPath, size) => {
      const doc = new PDFDocument({ size, margin: 0 });
      doc.pipe(fs.createWriteStream(outputPath));

      let count = 0;
      for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
          let entry = shuffled[count];
          let [label, data] = entry || [];
          let imagePlaced = false;
          let attempts = 0;

          while (!imagePlaced && attempts < availableImages.length) {
            if (!entry || usedLabels.has(label)) {
              entry = availableImages.find(([l]) => !usedLabels.has(l));
              if (!entry) break;
              [label, data] = entry;
            }

            try {
              doc.image(data.imagePath, col * cellWidth, row * cellHeight, {
                width: cellWidth,
                height: imageHeight
              });
              imagePlaced = true;
              usedLabels.add(label);
            } catch {
              availableImages = availableImages.filter(([l]) => l !== label);
              entry = undefined;
            }

            attempts++;
          }

          const labelY = row * cellHeight + imageHeight;
          if (imagePlaced) {
            doc.fontSize(8).fillColor('black').text(label, col * cellWidth, labelY, {
              width: cellWidth,
              align: 'center'
            });
          } else {
            doc.fontSize(8).fillColor('red').text('No image', col * cellWidth, row * cellHeight + cellHeight / 2, {
              width: cellWidth,
              align: 'center'
            });
          }

          count++;
        }
      }

      doc.end();
    };

    // Generate custom 10"x8" PDF
    const customPdfPath = path.join(bingoDir, `bingo_board_${i + 1}.pdf`);
    generateBoard(customPdfPath, [720, 576]);

    // Generate A4 landscape PDF (842 x 595 pt)
    const a4PdfPath = path.join(a4Dir, `bingo_board_${i + 1}.pdf`);
    generateBoard(a4PdfPath, [842, 595]);

    // Convert custom PDF to JPEG
    const options = {
      format: 'jpeg',
      out_dir: jpegDir,
      out_prefix: `bingo_board_${i + 1}`,
      page: null,
      dpi: 300
    };

    try {
      await pdf.convert(customPdfPath, options);
      console.log(`✓ Converted to JPEG: bingo_board_${i + 1}`);
    } catch (err) {
      console.error(`✗ Failed to convert to JPEG: ${err.message}`);
    }
  }

  console.log('✅ All bingo boards generated in custom size, A4, and JPEG formats.');
}

module.exports = { generateBingoBoards };
