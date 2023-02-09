/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  i18n: {
    // providing the locales supported by your application
   locales: ["en-US", "ta-TA"],
   //  default locale used when the non-locale paths are visited
   defaultLocale: "ta-TA",
 },
}

module.exports = nextConfig
