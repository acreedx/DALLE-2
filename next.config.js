/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "aiimagegeneratoracbfe575.blob.core.windows.net",
    ],
  },
};

module.exports = nextConfig;
