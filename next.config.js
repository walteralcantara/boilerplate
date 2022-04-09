/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = withPWA({
  pwa: {
    dest: "public",
    disable: !isProduction
  },
  reactStrictMode: true
});

module.exports = nextConfig;
