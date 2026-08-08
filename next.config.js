/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Static export for Cloudflare Pages (outputs to /out directory)
  output: "export",
  trailingSlash: true,

  // ✅ Required for static export — Next.js Image Optimization needs a server
  images: {
    unoptimized: true,
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

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