/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages; cache headers live in public/_headers.
  output: "export",
  images: { unoptimized: true },
}

module.exports = nextConfig
