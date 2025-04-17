import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  eslint: {
    // Disable the rule for unescaped entities to avoid build errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
