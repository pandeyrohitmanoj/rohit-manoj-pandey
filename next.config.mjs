/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'storage.googleapis.com',
            pathname: '/share_doc/**',
          },
        ],
      },
};

export default nextConfig;
