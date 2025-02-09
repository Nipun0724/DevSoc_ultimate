/** @type {import('next').NextConfig} 
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false
  }
}

module.exports = nextConfig*/
/*
require("dotenv").config(); // Load .env variables

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY, // ✅ Pass API key to frontend
  },
};

module.exports = nextConfig;
