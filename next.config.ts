import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // @ts-ignore - Turbopack root configuration to avoid scanning parent directories
  turbopack: {
    root: typeof process !== 'undefined' ? process.cwd() : '.',
  },
};

export default nextConfig;
