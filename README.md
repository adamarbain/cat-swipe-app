# 🐾 Paws & Preferences: Find Your Favourite Kitty

A fun and interactive web application that helps you discover your cat preferences through a Tinder-like swipe interface!

## 🎯 Features

- **Swipe Interface**: Swipe right to like, left to dislike (just like popular dating apps!)
- **Touch & Mouse Support**: Works seamlessly on both mobile and desktop
- **Smooth Animations**: Beautiful transitions powered by Framer Motion
- **Progress Tracking**: See how many cats you've reviewed
- **Results Summary**: View all your liked cats and statistics
- **Mobile-First Design**: Optimized for mobile devices with responsive layout
- **Cat Images**: Powered by the [Cataas API](https://cataas.com/)

## 🚀 Live Demo

[View Live Demo](#) *(https://adamarbain.github.io/cat-swipe-app/)*

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Cataas API** - Cat image source
- **CSS3** - Styling with modern features

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/adamarbain/cat-swipe-app.git
cd cat-swipe-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📱 How to Use

1. **Swipe or Click**: 
   - Swipe right or click the ❤️ button to like a cat
   - Swipe left or click the ✕ button to pass

2. **View Progress**: 
   - Track your progress with the counter and progress bar at the top

3. **See Results**: 
   - After reviewing all cats, see your statistics and liked cats
   - Click "Start Over" to try again

## 🎨 Features Implemented

- ✅ Single-page application
- ✅ Swipe gestures (left/right)
- ✅ Button alternatives for desktop
- ✅ Results summary with statistics
- ✅ Cat images from Cataas API
- ✅ Mobile-optimized interface
- ✅ Smooth animations and transitions
- ✅ Progress indicator
- ✅ Responsive design

## 📄 Project Structure

```
cat-swipe-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # App header with title
│   │   ├── Header.css
│   │   ├── CardStack.jsx       # Main swipe card component
│   │   ├── CardStack.css
│   │   ├── Results.jsx         # Results screen
│   │   └── Results.css
│   ├── App.jsx                 # Main app component
│   ├── App.css
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 🌐 Deployment

This app is configured for GitHub Pages deployment.

### Deploy to GitHub Pages:

1. Update `vite.config.js` with your repository name
2. Run the deployment script:
```bash
npm run build
npm run deploy
```

## 📝 License

© 2025 - Created for Netizen Testing Sdn Bhd assessment

## 👤 Author

[Adam Arbain]

---

Made with ❤️ and 🐱
