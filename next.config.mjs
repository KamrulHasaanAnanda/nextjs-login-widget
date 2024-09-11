/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@kamrulhassan2015/nextjs-login-widget'],
    experimental: {
        appDir: true,
    },
}

module.exports = nextConfig