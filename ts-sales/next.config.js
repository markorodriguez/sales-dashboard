const fs = require('fs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    'BCRYPTKEY': 'BCRYPTKEY',
  }
}

module.exports = nextConfig
