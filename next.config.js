/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['images.unsplash.com', 'storage.googleapis.com', 'tailwindui.com'],
  },
}

module.exports = nextConfig
