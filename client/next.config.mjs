import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve(import.meta.dirname), // Equivalent to __dirname in ES modules
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;