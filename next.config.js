/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for Render free tier
  experimental: {
    // Reduce memory usage during build
    workerThreads: false,
    cpus: 1
  },
  // Static optimization
  trailingSlash: true,
  // Reduce bundle size
  swcMinify: true,
  // Configure for production
  compress: true,
  poweredByHeader: false,
  // Output standalone for better performance
  output: 'standalone'
}

module.exports = nextConfig
