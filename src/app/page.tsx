'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, TrendingDown, ExternalLink } from 'lucide-react'
import { platformNames, platformColors } from '@/lib/products'
import type { Product } from '@/lib/products'

function formatPrice(n: number) {
  return 'Rp ' + n.toLocaleString('id-ID')
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/data/products.json').then(r => r.json()).then(setProducts)
  }, [])

  const filtered = search
    ? products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    : products

  return (
    <main className="min-h-screen">
      <header className="text-center py-16 px-5 bg-gradient-to-b from-bark to-bark/90">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
          Compare <span className="text-best">Price</span>
        </h1>
        <p className="text-white/60 text-lg max-w-lg mx-auto mb-8">
          Bandingkan harga produk yang sama di Tokopedia, Shopee, TikTok Shop, Lazada & Blibli.
        </p>
        <div className="max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-bark/40" size={20} />
          <input
            type="text"
            placeholder="Cari produk... (contoh: iPhone 16, Nike Air Force)"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-5 py-4 rounded-2xl bg-white text-bark text-sm border border-transparent focus:border-best focus:outline-none shadow-lg"
          />
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-5 py-12">
        <h2 className="font-display text-2xl font-bold text-bark mb-6 flex items-center gap-2">
          <TrendingDown size={22} className="text-best" />
          {search ? `Hasil: "${search}"` : 'Produk Populer'}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => {
            const cheapest = Math.min(...product.prices.filter(p => p.available).map(p => p.price))
            const expensive = Math.max(...product.prices.filter(p => p.available).map(p => p.price))
            const savings = expensive - cheapest

            return (
              <div key={product.slug} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <div className="relative h-48 bg-surface">
                  <Image src={product.image} alt={product.name} fill className="object-contain p-4" sizes="300px" />
                  <span className="absolute top-3 left-3 px-2 py-1 bg-bark/80 text-white text-[10px] font-bold rounded-lg">{product.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-bark text-sm mb-3 line-clamp-2">{product.name}</h3>

                  {/* Price range */}
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-best font-bold text-lg">{formatPrice(cheapest)}</span>
                    {savings > 0 && <span className="text-xs text-expensive line-through">{formatPrice(expensive)}</span>}
                  </div>

                  {/* Platform badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.prices.filter(p => p.available).sort((a, b) => a.price - b.price).map(p => (
                      <span
                        key={p.platform}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: p.price === cheapest ? '#16A34A' : platformColors[p.platform] + '80' }}
                      >
                        {platformNames[p.platform]} {formatPrice(p.price)}
                      </span>
                    ))}
                  </div>

                  {savings > 0 && (
                    <p className="text-xs text-best font-semibold mb-3">Hemat {formatPrice(savings)} di platform termurah</p>
                  )}

                  <a
                    href={product.prices.sort((a, b) => a.price - b.price)[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-best text-white font-semibold text-sm rounded-xl hover:bg-best/90 transition-colors cursor-pointer"
                  >
                    Beli Termurah <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-bark/40">
            <p className="text-4xl mb-3">🔍</p>
            <p>Produk tidak ditemukan.</p>
          </div>
        )}
      </section>

      <footer className="text-center py-8 text-bark/40 text-sm border-t">
        Compare Price &copy; 2026 — Harga dari official store. Update berkala.
      </footer>
    </main>
  )
}
