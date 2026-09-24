import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/the-drinkers",
  assetPrefix: "/the-drinkers/",
  images: { unoptimized: true },
};

export default nextConfig;
