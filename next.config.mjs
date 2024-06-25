/** @type {import('next').NextConfig} */

import dotenv from "dotenv";
dotenv.config();

const nextConfig = {
  env: {
    apiBaseUrl: process.env.BASE_URL,
  },
};

export default nextConfig;
