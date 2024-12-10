/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'standalone',
    env: {
        URL_NEXT_API: 'https://travel-app-next-delta.vercel.app',
      },
};

export default nextConfig;
