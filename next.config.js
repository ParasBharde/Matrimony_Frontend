/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const path = require('path')
const withImages = require("next-images");
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
module.exports = withImages();
module.exports = nextConfig
