# Dialed Coffee — Complete Website Scraping Analysis & Technical Recreation Report

**Target**: Dialed Coffee Company (https://www.dialedcoffee.com)  
**Developer**: Ahmad Khan  
**Repository**: https://github.com/ahmadkhan32/Coffeeshop.git  
**Date**: November 2026

---

## 1. Executive Summary
This academic report presents an exhaustive reverse-engineering, structural audit, data extraction pipeline, and responsive recreation of **Dialed Coffee**, a direct-to-consumer (D2C) functional beverage brand specializing in Colombian cold brew coffee infused with pharmaceutical-grade nootropics (Cognizin® Citicoline) and adaptogens (Rhodiola Rosea, Ashwagandha).

The project comprises three core deliverables:
1. **Automated Headless Extraction Suite**: A Node.js + Playwright Chromium scraping engine outputting RFC-4180 CSV, normalized JSON, and MongoDB models.
2. **Full Responsive React Application**: A modern, responsive React + Redux Toolkit web application utilizing real extracted assets and styling replicating the Webflow design.
3. **Decoupled Architecture Specification**: A WordPress PHP custom theme + WooCommerce integration blueprint.

---

## 2. Project Objectives
- **Information Architecture Mapping**: Discover, validate, and document all 10 public routes and sitemap structures.
- **Product Record Extraction**: Identify 4 product entities, capture pricing distinctions (listing price $45.99 vs detail preorder price $44.99), ingredients, volume, and customer ratings.
- **Ethical Crawling Compliance**: Adhere strictly to robots.txt policies, user-agent transparency, request throttling, and ethical handling of contact forms.
- **Production Web Engineering**: Rebuild the UI using modern React 19, Redux Toolkit, React Router 7, and Tailwind CSS, deploying live to Vercel.

---

## 3. Website Identification & Category
- **Brand Name**: Dialed Coffee
- **Primary Domain**: https://www.dialedcoffee.com
- **Business Category**: Direct-to-Consumer (D2C) Functional Beverage & Ecommerce
- **Product Lineup**: Single-origin Colombian cold brew with nootropics & adaptogens
- **Packaging Spec**: 355 ml sleek aluminum can; 12-can distribution carton
- **Target Market**: United States (Nationwide logistics)
- **Currency**: USD ($)

---

## 4. Technology Discovery & Architecture Assessment
### Original Target Platform: Webflow
Public design agency case studies (OFF+BRAND) and frontend DOM signatures confirm the original website was engineered using **Webflow**.
- **DOM Signatures**: `.w-dyn-list`, `.w-dyn-item`, `.w-dropdown`, `.w-nav`
- **Asset Delivery**: High-efficiency AVIF and WebP images delivered via CDN

### Technical Recreation Architecture: React + Redux Toolkit
- **Frontend Framework**: React 19 + Vite 6
- **Global State Management**: Redux Toolkit (`cartSlice.js` with LocalStorage persistence)
- **Styling**: Tailwind CSS with custom high-contrast dark palette (`#0D0D0D`, `#141414`, `#E58A2B`)
- **Deployment Platform**: Vercel SPA (`vercel.json` rewrites)

---

## 5. Website Sitemap & Information Architecture (10 Confirmed Public URLs)
1. Homepage: `https://www.dialedcoffee.com/` (Landing / Storytelling)
2. Shop Listing: `https://www.dialedcoffee.com/products` (Catalog Listing)
3. Original Black: `https://www.dialedcoffee.com/products/dialed-original-black` (Product Detail)
4. Toasted Vanilla: `https://www.dialedcoffee.com/products/dialed-toasted-vanilla` (Product Detail)
5. Smooth Mocha: `https://www.dialedcoffee.com/products/smooth-mocha` (Product Detail)
6. Variety Pack: `https://www.dialedcoffee.com/products/dialed-variety-pack` (Bundle Detail)
7. For Teams: `https://www.dialedcoffee.com/dialed-for-teams` (Corporate B2B)
8. Contact: `https://www.dialedcoffee.com/contact` (Support Routing)
9. FAQ: `https://www.dialedcoffee.com/faq` (Knowledge Base)
10. Delivery & Returns: `https://www.dialedcoffee.com/delivery-returns` (Compliance Policy)

*Note: `/account` and `/cart` are transactional paths intentionally excluded from automated crawlers.*

---

## 6. Product Catalog & Pricing Distinction
- **Original Black**: Listing Price: $45.99 | Detail Price: $44.99 | 12-Pack (355ml) | 200mg Caffeine
- **Toasted Vanilla**: Listing Price: $45.99 | Detail Price: $44.99 | 12-Pack (355ml) | 180mg Caffeine
- **Smooth Mocha**: Listing Price: $45.99 | Detail Price: $44.99 | 12-Pack (355ml) | 180mg Caffeine
- **Variety Pack**: Listing Price: $47.99 | Detail Price: $47.99 | 12-Pack (4 of each) | 180-200mg Caffeine

> **Data Integrity Rule**: The scraping schema explicitly retains both `listing_price` and `detail_price` as separate floating-point numbers to prevent destructive data overwriting.

---

## 7. Scraper Implementation & Execution Results
The scraping suite in `dialed-coffee-scraper/scraper.mjs` executes via Playwright Chromium headless.
- Confirmed Public URLs: 10 discovered & verified
- Extracted Products: 4 normalized records
- Listing Pages: 1 (`/products`)
- Detail Pages: 4 (`/products/*`)
- CSV Generated: `output/products.csv` (100% compliant)
- JSON Generated: `output/products.json`
- Failed Requests: 0 errors

---

## 8. Conclusion & Lecturer Verification
This project successfully bridges the gap between empirical web scraping, data modeling, and modern web application development. The website has been transformed from a proprietary Webflow implementation into an open, highly maintainable, component-driven React + Redux application deployed on Vercel and fully tracked on GitHub.
