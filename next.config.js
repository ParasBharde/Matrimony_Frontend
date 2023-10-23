/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '172.105.57.17',
        port: '1337',
        pathname: '/uploads/*',
      },
    ],
    images: {
      domains: ['172.105.57.17'],
    },
  },
}
const path = require('path')

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
    domains: ['172.105.57.17'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '172.105.57.17',
        port: '1337',
        pathname: '/uploads/*',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**/*',
      },
    ],
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    return config
  }
}


module.exports = nextConfig