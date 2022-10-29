/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL: "mongodb+srv://armaankhan:armaan242@cluster0.ygbfntv.mongodb.net/library?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
