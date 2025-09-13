import type { NextConfig } from 'next';

const { NEXT_PUBLIC_HOME_URL } = process.env;

const nextConfig: NextConfig = {
  assetPrefix: '/',
  experimental: {
    externalDir: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          destination: `/:path*`,
        },
        {
          source: '/home',
          destination: `${NEXT_PUBLIC_HOME_URL}/home`,
        },
        {
          source: '/home/:path*',
          destination: `${NEXT_PUBLIC_HOME_URL}/home/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
