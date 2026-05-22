# 🌿 Spotted on Site - Nature Bingo

A mobile-optimized web app for nature bingo with two modes: **Caller** for leading the game and **Player** for interactive bingo boards. Features a modern, clean interface with dark green theme inspired by Microsoft Fluent UI.

🎮 **[Launch the Caller](https://gg-platform.github.io/Nature-Bingo/)** | 🎯 **[Play Bingo](https://gg-platform.github.io/Nature-Bingo/player.html)**

---

## ✨ Features

### Caller Mode
- **75 Nature Items** - Comprehensive list of UK wildlife and nature items
- **Random Selection** - No repeats in a session
- **Visual Display** - Large images with item names
- **Call History** - See all previously called items
- **Keyboard Shortcuts** - Space/Enter to call next, R to reset
- **Adaptive Layout** - Controls adjust based on screen size and orientation

### Player Mode 🆕
- **Interactive 5x5 Bingo Board** - Randomly generated from 75 items
- **Tap to Mark** - Circle items when called, tap again to unmark
- **Auto Bingo Detection** - Checks rows, columns, and diagonals
- **Celebration Animation** - Fun confetti effect on winning
- **Board Persistence** - Your board and marks saved automatically (survives refresh!)
- **New Board Generator** - Get a fresh board anytime
- **No Session Required** - Fully standalone, no connection needed

### Universal
- **Mobile-First Design** - Optimized for phones, tablets, and desktops
- **Progressive Web App** - Works offline, feels like a native app
- **Responsive & Adaptive** - Perfect on any device or orientation

---

## 🚀 Usage

### Caller Mode
1. **Press "Call Next"** to reveal a random nature item
2. **View the Image** and item name prominently displayed
3. **Check Called Items** section at the bottom to see what's been called
4. **Press Reset** to start a new session
5. **Click 🎮** to switch to Player Mode

#### Keyboard Shortcuts
- `Space` or `Enter` - Call next item
- `R` - Reset session

### Player Mode
1. **Get Your Board** - A random 5x5 board is generated on load
2. **Mark Items** - Tap any cell to circle it when called
3. **Unmark** - Tap a marked cell again to remove the circle
4. **Win!** - Get 5 in a row, column, or diagonal for BINGO!
5. **New Board** - Click 🔄 to generate a new random board
6. **Back to Caller** - Click ← Caller to return
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