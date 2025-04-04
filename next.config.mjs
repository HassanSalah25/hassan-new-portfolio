/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/hassan-new-portfolio' : '',
    assetPrefix: isProd ? '/hassan-new-portfolio/' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
