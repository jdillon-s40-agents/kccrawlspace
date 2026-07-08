/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: '/crawl-space-assessment-kansas-city',
        destination: '/diy-crawl-space-kansas-city',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
