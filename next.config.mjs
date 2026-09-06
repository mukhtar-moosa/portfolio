/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add remote image domains here if you host project/profile images externally,
    // e.g. { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] }
    remotePatterns: [],
  },
};

export default nextConfig;
