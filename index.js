require('dotenv').config();

const promptUser = require('./promptUser');
const { generateFlashcards } = require('./flashcards');
const { generateBingoBoards } = require('./bingoBoards');
const { bingoCaller } = require('./bingoCaller');

(async () => {
  const folder = await promptUser('📂 Enter path to input folder: ');
  console.log("\n📚 Wildlife Image App Menu");
  console.log("1. Generate/Update Flashcards");
  console.log("2. Generate Bingo Boards");
  console.log("3. Bingo Caller");
  console.log("4. Exit\n");

  const choice = await promptUser("Choose an option (1-4): ");

  switch (choice) {
    case '1':
      await generateFlashcards(folder);
      break;
    case '2':
      await generateBingoBoards(folder);
      break;
    case '3':
      await bingoCaller(folder);
      break;
    case '4':
      console.log("👋 Exiting...");
      process.exit(0);
    default:
      console.log("❌ Invalid choice.");
  }
})();
