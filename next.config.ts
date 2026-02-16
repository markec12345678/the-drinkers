import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Za GitHub Pages build (npr. GitHub Actions)
  ...(process.env.GITHUB_PAGES === "true" && {
    output: "export",
    basePath: "/the-drinkers",
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
