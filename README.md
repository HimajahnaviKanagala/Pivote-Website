
# Pivot Studio — Company Website

A clean, responsive multi-page company marketing website built with **React** and **Tailwind CSS**.

---

## 📌 About the Project

Pivot Studio is a fully responsive, multi-page marketing website for a fictional creative digital agency. It was built as an internship task to demonstrate front-end design and development skills using React and Tailwind CSS.

The site includes five pages (Home, Services, About, Portfolio, Contact), reusable components (Button, Card, Navbar, Footer), responsive layout for mobile/tablet/desktop, and basic SEO meta tags.

---

## 🖥️ Pages

| Page | Description |
|---|---|
| **Home** | Hero section, animated marquee ticker, services preview, CTA band |
| **Services** | Full 6-service grid with hover effects + 4-step process section |
| **About** | Company story, core values list, and team member grid |
| **Portfolio** | Filterable project cards by category |
| **Contact** | Contact form with validation + contact info panel |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI library — components, hooks, state management |
| **Create React App** | Project setup and build tooling |
| **Tailwind CSS v3** | Utility-first CSS styling |
| **PostCSS + Autoprefixer** | Required by Tailwind CSS |
| **Google Fonts** | Syne (display) + DM Sans (body) typography |

---

## 📁 Project Structure

```
pivot-site/
├── public/
│   └── index.html             
├── src/
│   ├── index.js                
│   ├── index.css               
│   ├── App.js                
│   ├── data/
│   │   └── content.js          
│   ├── components/
│   │   ├── Navbar.js           
│   │   ├── Footer.js           
│   │   ├── Button.js           
│   │   └── Card.js             
│   └── pages/
│       ├── Home.js             
│       ├── Services.js        
│       ├── About.js            
│       ├── Portfolio.js        
│       └── Contact.js          
├── tailwind.config.js          
├── postcss.config.js           
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed on your machine:

- **Node.js** v16 or higher → [nodejs.org](https://nodejs.org)
- **npm** v7 or higher (comes with Node.js)

Check your versions:
```bash
node --version
npm --version
```

---

### Installation & Setup

**Step 1 — Create the React app**
```bash
npx create-react-app pivot-site
cd pivot-site
```

**Step 2 — Install Tailwind CSS**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

**Step 3 — Replace `tailwind.config.js`** with:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body:    ["'DM Sans'", "sans-serif"],
      },
      colors: {
        ink:     "#0a0a0f",
        paper:   "#f5f3ee",
        cream:   "#ede9e0",
        accent:  "#c8451a",
        accent2: "#2a5f8f",
        mid:     "#6b6760",
      },
    },
  },
  plugins: [],
};
```

**Step 4 — Replace `src/index.css`** with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 22s linear infinite;
}

.service-card:hover { background-color: #0a0a0f; }
.service-card:hover .service-num  { color: rgba(245,243,238,0.08); }
.service-card:hover .service-icon,
.service-card:hover .service-name,
.service-card:hover .service-desc { color: #f5f3ee; }
```

**Step 5 — Copy all source files** into your `src/` folder following the structure above.

**Step 6 — Start the development server**
```bash
npm start
```

Visit **http://localhost:5173** in your browser ✅

---

## 🌐 Deployment

### Option 1 — Vercel (Recommended)

**Via Vercel CLI:**
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to your Vercel account
vercel login

# Build the project
npm run build

# Deploy to production
vercel --prod
```
---

### Option 2 — Render

1. Push your project to GitHub
2. Go to [render.com](https://render.com) → **New** → **Static Site**
3. Connect your GitHub repository
4. Set the following:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `build`
5. Click **Create Static Site** ✅

---

### Option 3 — GitHub Pages

```bash
# Step 1 — Install gh-pages
npm install -D gh-pages

# Step 2 — Add to package.json:
# "homepage": "https://YOUR_USERNAME.github.io/pivot-site"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"

# Step 3 — Deploy
npm run deploy
```
---
