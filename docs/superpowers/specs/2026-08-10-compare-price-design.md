# Compare Price — Design Spec

## Purpose
Compare prices of identical products across 5 Indonesian marketplaces (Tokopedia, Shopee, TikTok Shop, Lazada, Blibli). Official stores only.

## Stack
- Next.js 15, React 19, Tailwind CSS
- Playwright (scraper in GitHub Actions)
- Vercel deploy

## Design System
- **Style:** Vibrant & Block-based, ecommerce-clean
- **Primary:** #1C1917, **Accent (best price):** #16A34A, **Expensive:** #EF4444
- **Typography:** Rubik (display) / Nunito Sans (body)
- **Background:** #FAFAF9

## Pages
1. `/` — Hero + search bar + curated product grid
2. `/product/[slug]` — Comparison table (price per platform, link beli, badge termurah)

## Data Strategy
- **Curated list:** pre-scraped popular products in `public/data/products.json`
- **Daily update:** GitHub Actions + Playwright scrape prices from 5 marketplaces
- **Search:** client-side filter against curated data (no real-time scraping from Vercel)

## Scraper (GitHub Actions)
- Playwright headless Chromium
- Search product name on each marketplace
- Filter official store results only
- Extract: price, product URL, store name, image
- Write to `public/data/products.json`

## Constraints
- No real-time scraping from Vercel (timeout limit)
- Scraping may fail intermittently (marketplace anti-bot)
- Fallback: curated data always present as baseline
- Only official stores
