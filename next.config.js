/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Performance optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
  },
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react"],
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
