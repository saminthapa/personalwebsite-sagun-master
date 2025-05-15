/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    env: {
        CUSTOM_DOMAIN: 'gautamsagun.com.np', // Set your domain as an environment variable
      },
};

export default nextConfig;
