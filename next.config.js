/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const path = require('path')
require('dotenv').config()
const webpack = require('webpack')
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

  rewrites: async () => nextI18NextRewrites(localeSubpaths),

  env: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  },

  images: {
   deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [process.env.IMAGES_DOMAIN],
    path: '/_next/image',
    loader: 'default',
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    return config
  }
}

module.exports = nextConfig
