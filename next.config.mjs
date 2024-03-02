/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'unavatar.io',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            }
        ]
    }
};

export default nextConfig;
