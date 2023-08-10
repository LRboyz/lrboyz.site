// module.exports = nextConfig;
// const withNextIntl = require('next-intl/plugin')('./i18n.ts')

const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    appDir: true,
    serverActions: true
  },
  images: {
    domains: ['cdn.sanity.io']
  }
}

module.exports = nextConfig
