/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_URL_NEXT_API:
      process.env.NODE_ENV === "production"
        ? "https://travel-app-next-delta.vercel.app"
        : "http://localhost:3000",
  },
};

export default nextConfig;
