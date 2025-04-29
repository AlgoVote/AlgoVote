import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.namu.wiki',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'readdy.ai',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
