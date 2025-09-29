import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Temporarily ignore build errors during refactoring
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.dandelion-dynasty.com',
          },
        ],
        destination: 'https://dandelion-dynasty.com/:path*',
        permanent: true, // 301 redirect
      },
      // Redirect old Vercel domain to new custom domain
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'dandelion-wiki.vercel.app',
          },
        ],
        destination: 'https://dandelion-dynasty.com/:path*',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
