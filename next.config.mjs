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
    // old
    // BASE_API_URL: 'https://www.ctforumtest.ru/v1/api',
    // =
    // BASE_API_URL: 'https://www.ctforumtest.ru/api-v1',
    BASE_URL: 'https://www.ctforumtest.ru/api-v1',
  },
};

export default nextConfig;
