/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/SWTS_Website-GithubPage' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/SWTS_Website-GithubPage/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
