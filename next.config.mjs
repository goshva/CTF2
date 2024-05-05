/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.steamstatic.com', 'skinwallet.com', 'www.skinwallet.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
