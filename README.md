# 🦉 Items to Images App

A Node.js CLI tool for generating wildlife flashcards, bingo boards, and running a bingo caller session using UK wildlife species. It fetches images and facts for each item, and outputs printable PDFs.

---

## ✨ Features

- Fetches images from Wikimedia, Google, and Pexels (with fallback)
- Uses OpenAI to generate concise, accurate UK wildlife facts
- Generates A4 flashcards and bingo boards as PDFs
- Interactive Bingo Caller mode (no repeats per session)
- Caches facts and images for efficiency

---

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/yourusername/items-to-images-app.git
cd items-to-images-app
npm install
```

### 2. Set Up API Keys

Create a `.env` file in the project root:

```
PEXELS_API_KEY=your_pexels_api_key
OPENAI_API_KEY=your_openai_api_key
GOOGLE_API_KEY=your_google_api_key
GOOGLE_CSE_ID=your_google_cse_id
```

### 3. Prepare Your Input

Create an `input.txt` file (one item per line):

```
Robin
Oak tree
Peacock butterfly
Wood pigeon
Green woodpecker
```

---

## 🖥️ Usage

Run the app:

```bash
node index.js
```

You will see a menu:

```
📚 Wildlife Image App Menu
1. Generate/Update Flashcards
2. Generate Bingo Boards
3. Bingo Caller
4. Exit
```

- **Flashcards:** Generates a PDF of flashcards with images and facts.
- **Bingo Boards:** Generates randomized bingo boards as PDFs.
- **Bingo Caller:** Randomly calls items from your list, one at a time, without repeats.

---

## 📝 Notes

- Images and facts are cached in the output folder.
- If an image cannot be found or is invalid, it is skipped or replaced.
- The Bingo Caller will not repeat items in a session.

---

## 📄 License

MIT License

---

## 🙏 Credits

- [OpenAI](https://openai.com/)
- [Pexels](https://www.pexels.com/)
- [Wikipedia](https://www.wikipedia.org/)
- [PDFKit](https://pdfkit.org/)

---

## 🌐 Web Bingo Caller

A mobile-friendly web version of the bingo caller is also available!

### Features

- 🎲 Random nature item caller with 75+ items
- 📱 Mobile-responsive Fluent UI design
- 🌙 Dark green nature theme
- 🖼️ High-quality images for each item
- 📊 Real-time statistics
- ⌨️ Keyboard shortcuts (Space/Enter to call, R to reset)

### Live Demo

Visit: [https://gg-platform.github.io/Nature-Bingo/](https://gg-platform.github.io/Nature-Bingo/)

### Deploying to GitHub Pages

1. **Push to GitHub**:
   ```bash
   git add index.html styles.css app.js .nojekyll
   git commit -m "Add web bingo caller"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select `main` branch and `/ (root)` folder
   - Save and wait for deployment

3. **Access your site**:
   - The app will be live at: `https://gg-platform.github.io/Nature-Bingo/`

### Local Testing

Open `index.html` in a browser or run a local server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve
```

Then visit `http://localhost:8000`