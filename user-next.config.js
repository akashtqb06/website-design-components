/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      if (isServer) {
        require("./scripts/generate-sitemap")
      }
  
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader",
      })
  
      return config
    },
  }
  
  module.exports = nextConfig
  