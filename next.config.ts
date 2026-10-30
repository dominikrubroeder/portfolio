import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dominikrubroeder.dev',
        port: '',
        pathname: '/**'
      }
    ]
  },
  redirects: async () => [
    { source: '/projects', destination: '/selected-works', permanent: true }
  ],
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
