import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.compare-price.web.id'),
  title: 'Compare Price — Bandingkan Harga di 5 Marketplace Indonesia',
  description: 'Cari harga termurah produk yang sama di Tokopedia, Shopee, TikTok Shop, Lazada, dan Blibli. Official store only.',
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Compare Price',
              url: 'https://www.compare-price.web.id',
              logo: 'https://www.compare-price.web.id/logo-512.png',
            }),
          }}
        />
      </head>
      <body className="bg-[#FAFAF9] text-bark antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
