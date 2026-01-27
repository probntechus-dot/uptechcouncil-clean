/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [],
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


