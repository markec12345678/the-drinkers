import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Za GitHub Pages build (npr. GitHub Actions)
  ...(process.env.GITHUB_PAGES === "true" && {
    output: "export",
    basePath: "/the-drinkers",
  }),
  images: {
    unoptimized: true,
  },
  // Popravi opozorilo "multiple lockfiles" na CI/Vercel
  outputFileTracingRoot: path.join(process.cwd()),
};

export default nextConfig;
