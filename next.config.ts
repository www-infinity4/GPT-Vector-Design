import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/GPT-Vector-Design",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
