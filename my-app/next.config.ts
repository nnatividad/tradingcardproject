import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  env: {
    POKEMON_API_KEY: process.env.TCG_API_KEY
  }
}

export default nextConfig;
