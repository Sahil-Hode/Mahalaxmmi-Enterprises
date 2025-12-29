/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Enable React Compiler (stable)
  reactCompiler: true,

  // ✅ Remove X-Powered-By header
  poweredByHeader: false,

  // ✅ Enable strict mode
  reactStrictMode: true,

  // ✅ SWC minification (smaller & harder to read output)
  swcMinify: true,

  // ✅ Hide source maps in production (VERY IMPORTANT)
  productionBrowserSourceMaps: false,

  // ✅ Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  // ✅ Image security
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [],
  },

  // ✅ Experimental optimizations (safe)
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
