import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Za GitHub Pages build (npr. GitHub Actions)
  ...(process.env.GITHUB_PAGES === "true" && {
    output: "export",
    basePath: "/the-drinkers",
  }),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/markec12345678/the-drinkers/**",
      },
    ],
  },
};

export default nextConfig;
