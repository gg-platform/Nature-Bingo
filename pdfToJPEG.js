const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const pdf = require('pdf-poppler'); // Correct usage
const promptUser = require('./promptUser'); // Your existing module

async function convertPDFsToJPG(folderPath) {
  const outputFolder = path.join(folderPath, 'JPEGS');
  await fse.ensureDir(outputFolder);

  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.pdf') {
      const inputPath = path.join(folderPath, file);
      const baseName = path.parse(file).name;

      const options = {
        format: 'jpeg',
        out_dir: outputFolder,
        out_prefix: baseName,
        page: null, // all pages
        dpi: 600 
      };

      try {
        console.log(`Converting: ${file}`);
        await pdf.convert(inputPath, options);
        console.log(`✓ Saved JPEG(s) for: ${file}`);
      } catch (error) {
        console.error(`✗ Failed to convert ${file}: ${error.message}`);
      }
    }
  }

  console.log('✅ All PDF files processed.');
}

(async () => {
  const folderPath = await promptUser('Enter the path to the folder containing PDFs: ');

  if (!fs.existsSync(folderPath)) {
    console.error('✗ Folder not found.');
    process.exit(1);
  }

  await convertPDFsToJPG(folderPath);
})();
