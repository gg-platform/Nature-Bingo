const { OpenAI } = require('openai');
const pLimit = require('p-limit').default;

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
// Limit concurrent OpenAI requests to 1 at a time
const limit = pLimit(1);

/**
 * Fetches wildlife facts for a given species label using OpenAI's API.
 * Returns a structured JSON object with facts and optional dependency info.
 * @param {string} label - The species name to query.
 * @returns {Promise<Object>} - The facts object for the species.
 */
async function getWildlifeFact(label) {
  // Prompt instructs the AI to return a strict JSON structure for the given species
  const prompt = `
You are a UK wildlife expert. Given a species name, return a JSON object in this exact structure:

{
  "item Name": {
    "facts": [
      { "fact": "string", "factGroup": "Conservation" },
      { "fact": "string", "factGroup": "Diet" },
      { "fact": "string", "factGroup": "Habitat" },
      { "fact": "string", "factGroup": "Conservation Tip" }
    ],
    "dependsOn": {
      "item": "Other Species Name",
      "reason": "Brief explanation of the dependency"
    }
  }
}

Important rules:
- The top-level key **must match exactly** the item name given.
- Do not add extra nesting.
- Do not add additional top-level objects.
- All four factGroup entries must be present.
- Ensure all facts are concise (1-2 sentences each) and scientifically accurate for UK wildlife.
- Use only the allowed factGroups: "Conservation", "Diet", "Habitat", "Conservation Tip".
- "dependsOn" can be omitted if irrelevant.
- Output ONLY valid JSON — no explanations, no extra text.

Species: ${label}
`;

  // Make a request to OpenAI with the prompt, limiting concurrency
  const response = await limit(() => openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: `Species: ${label}` }
    ],
    temperature: 0.7
  }));

  // Parse the JSON response and return the facts for the label
  const parsed = JSON.parse(response.choices[0].message.content.trim());
  return parsed[label] || parsed;
}

module.exports = { getWildlifeFact };