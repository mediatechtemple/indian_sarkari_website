/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
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
