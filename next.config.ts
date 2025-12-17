import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Désactiver les DevTools en production si nécessaire
  ...(process.env.NODE_ENV === 'production' && {
    // Options de production
  }),
};

export default nextConfig;
