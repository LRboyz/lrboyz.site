// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
//   experimental: {
//     appDir: true,
//   },
// };

// module.exports = nextConfig;
const withNextIntl = require('next-intl/plugin')('./i18n.ts')

module.exports = withNextIntl({
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    appDir: true,
  },
})