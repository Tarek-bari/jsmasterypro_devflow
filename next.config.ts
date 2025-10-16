// import type { NextConfig } from "next";

import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.svgrepo.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
