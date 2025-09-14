import type { NextConfig } from 'next';
import path from 'node:path';

const { NEXT_PUBLIC_HOME_URL } = process.env;

const nextConfig: NextConfig = {
  assetPrefix: '/',
  experimental: {
    externalDir: true,
  },
  turbopack: {
    // Ensure Turbopack resolves workspace root to this app
    root: __dirname,
    // Alias the local package name to the actual shared folder
    resolveAlias: {
      shared: path.resolve(__dirname, '../shared'),
    },
  },
  transpilePackages: ['shared'],
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      shared: path.resolve(__dirname, '../shared'),
    };
    return config;
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
