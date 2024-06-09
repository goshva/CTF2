/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    BASE_API_URL: "https://www.ctforumtest.ru/v1/api",
    BASE_URL: "https://www.ctforumtest.ru/v1"
  }
};

export default nextConfig;
