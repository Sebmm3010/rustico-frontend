/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://rustico-api.onrender.com/:path*',
      },
    ]
  },
}

module.exports = nextConfig
