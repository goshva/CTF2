import withNextIntl from "next-intl/plugin";

const nextIntlConfig = withNextIntl();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextIntlConfig(nextConfig);

// images: {
//   remotePatterns: [
//     {
//       protocol: 'https',
//       hostname: 'avatars.steamstatic.com',
//     },
//     {
//       protocol: 'https',
//       hostname: 'skinwallet.com',
//     },
//     {
//       protocol: 'https',
//       hostname: 'www.skinwallet.com',
//     },
//   ],
//   formats: ['image/avif', 'image/webp'],
// },
