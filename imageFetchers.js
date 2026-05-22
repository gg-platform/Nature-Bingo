const axios = require('axios');
const fs = require('fs-extra');
const sharp = require('sharp');

// API keys from environment variables
const PEXELS_API_KEY = process.env.PEXELS_API_KEY;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_CSE_ID = process.env.GOOGLE_CSE_ID;

/**
 * Fetches the main image for a Wikipedia page using the Wikimedia API.
 * @param {string} query - The Wikipedia page title to search for.
 * @returns {Promise<string|null>} - The image URL or null if not found.
 */
async function getWikimediaImage(query) {
  try {
    const response = await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        titles: query,
        prop: 'pageimages',
        format: 'json',
        pithumbsize: 600,
        redirects: 1,
      },
    });
    const pages = response.data.query.pages;
    const page = Object.values(pages)[0];
    return page?.thumbnail?.source || null;
  } catch {
    return null;
  }
}

/**
 * Fetches the first Google image result using the Custom Search API.
 * @param {string} query - The search query.
 * @returns {Promise<string|null>} - The image URL or null if not found.
 */
async function getGoogleImage(query) {
  try {
    const res = await axios.get('https://www.googleapis.com/customsearch/v1', {
      params: {
        key: GOOGLE_API_KEY,
        cx: GOOGLE_CSE_ID,
        searchType: 'image',
        q: query,
        num: 1,
        safe: 'active'
      },
    });
    return res.data.items?.[0]?.link || null;
  } catch {
    return null;
  }
}

/**
 * Fetches the first image result from Pexels.
 * @param {string} query - The search query.
 * @returns {Promise<string|null>} - The image URL or null if not found.
 */
async function getPexelsImage(query) {
  try {
    const res = await axios.get('https://api.pexels.com/v1/search', {
      params: { query, per_page: 1 },
      headers: { Authorization: PEXELS_API_KEY },
    });
    return res.data.photos?.[0]?.src?.large || null;
  } catch {
    return null;
  }
}

/**
 * Tries to get an image URL from Wikimedia, Google, then Pexels (in order).
 * @param {string} query - The search query.
 * @returns {Promise<{url: string|null, source: string|null}>}
 */
async function getImageUrl(query) {
  const wiki = await getWikimediaImage(query);
  if (wiki) return { url: wiki, source: 'wikipedia' };
  const google = await getGoogleImage(query);
  if (google) return { url: google, source: 'google' };
  const pexels = await getPexelsImage(query);
  if (pexels) return { url: pexels, source: 'pexels' };
  return { url: null, source: null };
}

/**
 * Downloads an image from a URL to a local file.
 * @param {string} url - The image URL.
 * @param {string} filePath - The local file path to save the image.
 * @returns {Promise<string|null>} - The file path or null if failed.
 */
async function downloadImage(url, filePath) {
  try {
    if (await fs.pathExists(filePath)) return filePath;
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    await fs.writeFile(filePath, res.data);
    return filePath;
  } catch {
    return null;
  }
}

module.exports = {
  getWikimediaImage,
  getGoogleImage,
  getPexelsImage,
  getImageUrl,
  downloadImage,
};