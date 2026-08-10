/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'store.storeimages.cdn-apple.com' },
      { protocol: 'https', hostname: 'images.samsung.com' },
      { protocol: 'https', hostname: 'static.nike.com' },
      { protocol: 'https', hostname: 'images.tokopedia.net' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}
