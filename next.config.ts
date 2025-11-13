import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "fnsvnvotzowxyongekui.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.crisp.chat",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

