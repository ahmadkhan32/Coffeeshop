# Dialed Coffee — Educational Web Scraper

An ethical, browser-automated crawler and extraction pipeline designed for the educational study and analysis of **Dialed Coffee** (`https://www.dialedcoffee.com`), a Webflow-powered direct-to-consumer functional cold brew brand.

---

## 1. Prerequisites

- **Node.js**: v18+ (tested on Node.js v24)
- **NPM**: v9+

---

## 2. Installation

Navigate to the `dialed-coffee-scraper` directory:

```bash
cd dialed-coffee-scraper
npm install
npx playwright install chromium
```

---

## 3. Running the Scraper

Run with default settings:
```bash
npm start
```

Run with custom page limits and request throttling:
```bash
MAX_PAGES=40 DELAY_MS=2000 npm start
```

---

## 4. Output Datasets

After execution, all structured files are saved to `./output/`:

| File | Format | Description |
|------|--------|-------------|
| `output/pages.json` | JSON | Inventory of discovered pages, titles, meta tags, and internal link graph |
| `output/products.json` | JSON | Normalized JSON product records matching the educational schema |
| `output/products.csv` | CSV | RFC-4180 compliant CSV export ready for Excel and pandas |
| `output/summary.json` | JSON | Execution telemetry, discovered counts, and crawl performance |
| `output/robots.txt` | TXT | Target domain crawling policy and disallowed paths |
| `output/failed-urls.json` | JSON | Disallowed or unreachable URLs during execution |

---

## 5. CSV Schema Specification

```csv
name,category,description,listing_price,detail_price,currency,rating,review_count,pack_size,volume,ingredients,product_url,image_urls,source_page
```

---

## 6. Ethical Crawling Policy

1. **Robots.txt Adherence**: Respects `Disallow: /account` and `Disallow: /cart`.
2. **Exclusion of Transactional Endpoints**: Never accesses or simulates checkouts or authenticated user accounts.
3. **No Form Submissions**: Contact and team inquiry forms are analyzed statically and never submitted automatically.
4. **Gentle Rate Limiting**: Enforces a 1,500ms delay between page loads to avoid server strain.
