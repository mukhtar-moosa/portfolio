const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGithubActions ? "/portfolio" : "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;