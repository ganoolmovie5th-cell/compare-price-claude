export interface PlatformPrice {
  platform: 'tokopedia' | 'shopee' | 'tiktok' | 'lazada' | 'blibli'
  price: number
  url: string
  store: string
  available: boolean
}

export interface Product {
  slug: string
  name: string
  image: string
  category: string
  prices: PlatformPrice[]
  updatedAt: string
}

export const platformColors: Record<string, string> = {
  tokopedia: '#42B549',
  shopee: '#EE4D2D',
  tiktok: '#010101',
  lazada: '#0F146D',
  blibli: '#0095DA',
}

export const platformNames: Record<string, string> = {
  tokopedia: 'Tokopedia',
  shopee: 'Shopee',
  tiktok: 'TikTok Shop',
  lazada: 'Lazada',
  blibli: 'Blibli',
}
