/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        newNextLinkBehavior: false,
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
            };
        }

        return config;
    },
    future: { webpack5: true }
};
module.exports = nextConfig;
