import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_PAGES === "true" ? "/the-drinkers" : "",
  images: {
    unoptimized: true,
    qualities: [75, 85],
  },
};

export default nextConfig;
