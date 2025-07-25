import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kioshistone.nyc3.digitaloceanspaces.com"
      }
    ]
  },
};

export default nextConfig;
