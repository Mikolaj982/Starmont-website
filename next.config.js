/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        REACT_APP_GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
      },
}

module.exports = nextConfig
