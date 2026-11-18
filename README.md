# Dialed Coffee — Web Systems & Performance Cold Brew Platform

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://vercel.com)
[![React 19](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux-Toolkit-purple?logo=redux)](https://redux-toolkit.js.org/)
[![Playwright](https://img.shields.io/badge/Playwright-Scraper-green?logo=playwright)](https://playwright.dev/)

A modern, responsive e-commerce web platform and automated data engineering pipeline modeled on **Dialed Coffee** (`https://www.dialedcoffee.com`), a performance Colombian cold brew brand infused with cognitive nootropics (Cognizin® Citicoline) and adaptogens.

Repository: **[https://github.com/ahmadkhan32/Coffeeshop.git](https://github.com/ahmadkhan32/Coffeeshop.git)**

---

## 1. Project Overview & Deliverables

1. **Modern Frontend Web Application (React + Vite + Redux Toolkit)**
   - Re-implementation of the Webflow-based website in high-performance React 19.
   - Utilizes authentic assets and SVGs from the `Images/` directory:
     - Dialed logos and brand badges (`download.svg`, `download (1).svg`, etc.)
     - Signature 12-pack cans (Original Black, Toasted Vanilla, Smooth Mocha, Variety Pack)
     - Interactive hovers, product carousel, ingredients backdrop, and customer headshots.
   - Comprehensive Redux Toolkit store (`cartSlice.js`) with persistent LocalStorage, promo codes (`DIALED10`), shipping threshold progress bar ($60 limit), and checkout simulation.
   - Complete implementation of all **10 confirmed public URLs**:
     1. `/` (Homepage — 14-section narrative conversion flow)
     2. `/products` (Shop catalog with flavor filters and sorting)
     3. `/products/dialed-original-black` (Detail page)
     4. `/products/dialed-toasted-vanilla` (Detail page)
     5. `/products/smooth-mocha` (Detail page)
     6. `/products/dialed-variety-pack` (Detail page)
     7. `/dialed-for-teams` (Corporate office delivery & quote calculator)
     8. `/contact` (Support ticket routing)
     9. `/faq` (Interactive categorized knowledge base)
     10. `/delivery-returns` (Shipping times, shelf-stability & 30-day taste guarantee)

2. **Automated Scraping & Extraction Suite (`dialed-coffee-scraper/`)**
   - Node.js Playwright crawler with robots.txt policy validation.
   - Dual-pricing preservation: prevents overwriting listing price ($45.99) with detail preorder price ($44.99).
   - Generated dataset exports in `./output/`:
     - `products.json`
     - `products.csv`
     - `pages.json`
     - `summary.json`
     - `robots.txt`
     - `failed-urls.json`
   - Complete academic report template (`REPORT-TEMPLATE.md`).

3. **WordPress & WooCommerce Headless Blueprint (`dialed-inspired-theme/`)**
   - Custom PHP WordPress theme structure with REST API endpoints (`/wp-json/dialed/v1/products`) for headless integration.

---

## 2. Quickstart — Running The React Web App

### Prerequisites
- Node.js v18+ 
- NPM v9+

### Installation & Development
```bash
# Install dependencies
npm install

# Start Vite local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## 3. Running The Playwright Scraper

```bash
cd dialed-coffee-scraper
npm install
npx playwright install chromium

# Execute the scraper
npm start
```

---

## 4. Deploying to Vercel

This repository is optimized for one-click deployment on Vercel:

1. Import the repository `https://github.com/ahmadkhan32/Coffeeshop.git` into [Vercel](https://vercel.com/new).
2. Framework Preset: **Vite** (auto-detected).
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**.

Routing rewrites are already handled by `vercel.json`:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 5. CSV Schema Specification

```csv
name,category,description,listing_price,detail_price,currency,rating,review_count,pack_size,volume,ingredients,product_url,image_urls,source_page
```

---

## 6. License
Created for academic reverse-engineering and educational research. Brand assets and product names remain the intellectual property of Dialed Coffee Company.
