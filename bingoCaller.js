const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');
const { shuffle } = require('lodash');

/**
 * Runs an interactive bingo caller in the terminal.
 * Reads labels from input.txt, shuffles them, and calls each one on Enter.
 * @param {string} folder - The folder containing input.txt.
 */
async function bingoCaller(folder) {
  const inputPath = path.join(folder, 'input.txt');
  // Read all labels from input.txt, trimming whitespace and skipping empty lines
  const allLabels = (await fs.readFile(inputPath, 'utf8'))
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean);

  // Shuffle the labels for random calling order
  const remaining = shuffle([...allLabels]);
  console.log('\n🎲 Bingo Caller Started! Press Enter to call the next item, or type "exit" to stop.\n');

  // Set up readline interface for user input
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  // Function to prompt user for next item or exit
  function askNext() {
    if (remaining.length === 0) {
      console.log('✅ All items have been called!');
      rl.close();
      return;
    }
    rl.question('Press Enter for next item: ', (answer) => {
      if (answer.trim().toLowerCase() === 'exit') {
        console.log('👋 Exiting Bingo Caller.');
        rl.close();
        return;
      }
      const next = remaining.pop();
      console.log(`👉 ${next}`);
      askNext();
    });
  }

  askNext();
}

module.exports = { bingoCaller };