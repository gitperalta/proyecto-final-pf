/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com',  'platform-lookaside.fbsbx.com', "cdn2.thedogapi.com", "olondriz.com"], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/account123/**',
      },
    ]
  }
}

module.exports = nextConfig;
