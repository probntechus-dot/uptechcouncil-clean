/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Allow serving images from the image folder at root
  async rewrites() {
    return [
      {
        source: "/image/:path*",
        destination: "/image/:path*",
      },
    ];
  },
}

module.exports = nextConfig


