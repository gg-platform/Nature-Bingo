# 🌿 Spotted on Site - Nature Bingo Caller

A mobile-optimized web app for calling nature bingo items spotted on site. Features a modern, clean interface with dark green theme inspired by Microsoft Fluent UI.

🎮 **[Launch the App](https://gg-platform.github.io/Nature-Bingo/)**

---

## ✨ Features

- **75 Nature Items** - Comprehensive list of UK wildlife and nature items
- **Mobile-First Design** - Optimized for phones, tablets, and desktops
- **Adaptive Layout** - Controls adjust based on screen size and orientation
- **No Repeats** - Each item called only once per session
- **Visual Display** - Large images with item names
- **Call History** - See all previously called items
- **Keyboard Shortcuts** - Space/Enter to call next, R to reset
- **Progressive Web App** - Works offline, feels like a native app

---

## 🚀 Usage

1. **Press "Call Next"** to reveal a random nature item
2. **View the Image** and item name prominently displayed
3. **Check Called Items** section at the bottom to see what's been called
4. **Press Reset** to start a new session

### Keyboard Shortcuts
- `Space` or `Enter` - Call next item
- `R` - Reset session

---

## 🎨 Design

Modern Model-Driven app aesthetic with:
- **Dark green nature theme** (#1a5c31 primary, #2d9656 accent)
- **Compact header & footer** for maximum content space
- **Adaptive layout** - Side-by-side on wide screens, stacked on mobile
- **Fixed viewport** - True app-like feel with no scrolling issues
- **Smooth animations** - Polished transitions and interactions

---

## 🛠️ Technology

- Vanilla JavaScript (ES6+)
- Modern CSS (Flexbox, CSS Grid, CSS Variables)
- HTML5
- No frameworks or dependencies
- Deployed via GitHub Actions to GitHub Pages

---

## 📱 Responsive Breakpoints

- **Desktop (> 768px):** Controls sidebar with stats and button next to image card
- **Tablet/Mobile (≤ 768px):** Horizontal controls above image card
- **Small Mobile (≤ 480px):** Full vertical stack for optimal space
- **Landscape Mode:** Optimized layout for horizontal orientation

---

## 🚀 Development

### Local Testing
```bash
# Simple HTTP server
python -m http.server 8000

# Or with Node.js
npx serve
```

Then open [http://localhost:8000](http://localhost:8000)

### Deployment
Automatic deployment to GitHub Pages via GitHub Actions on every push to `main`.

---

## 📄 License

MIT License

---

## 🌱 About

Created for nature education and wildlife spotting activities. Perfect for guided nature walks, outdoor education sessions, and wildlife awareness programs.

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