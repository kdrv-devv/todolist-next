/** @type {import('next').NextConfig} */
const nextConfig = {
  // Konfiguratsiya sozlamalari shu yerda bo‘ladi
};

module.exports = nextConfig;


const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
});
