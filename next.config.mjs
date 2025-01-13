/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["backend.indiasarkarinaukri.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.indiasarkarinaukri.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
