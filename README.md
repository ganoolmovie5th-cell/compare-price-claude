# Compare Price

Platform perbandingan harga produk dari berbagai marketplace Indonesia. Cari produk, bandingkan harga antar platform, dan temukan penawaran terbaik.

**Tech Stack:** Next.js · Tailwind CSS · Lucide Icons

## Features

- Pencarian produk dengan filter real-time
- Perbandingan harga antar platform (Shopee, Tokopedia, dll)
- Format harga Rupiah (Rp)
- Highlight harga termurah
- Link langsung ke produk di platform asli
- Responsive design (mobile + desktop)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    page.tsx          → Homepage (search + product grid)
    product/          → Product detail & comparison
  components/         → Reusable UI components
  lib/
    products.ts       → Product types & platform config
public/
  data/products.json  → Product database
```

## Data Format

Products stored in `public/data/products.json`:
```json
{
  "name": "Product Name",
  "prices": {
    "shopee": 150000,
    "tokopedia": 145000
  }
}
```

## License

MIT
