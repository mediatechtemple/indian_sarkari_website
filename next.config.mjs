/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["newindiansarkari-production.up.railway.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "newindiansarkari-production.up.railway.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
