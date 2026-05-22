const readline = require('readline');

/**
 * Prompts the user for input in the terminal and returns the response.
 * @param {string} query - The prompt message to display.
 * @returns {Promise<string>} - The user's input, trimmed of whitespace.
 */
function promptUser(query) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans.trim());
  }));
}

module.exports = promptUser;