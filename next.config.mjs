/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'ucarecdn.com',
              },
              {
                protocol: 'https',
                hostname: 'wordpress-1287892-4669675.cloudwaysapps.com',
              },
        ]
    } 
};

export default nextConfig;
