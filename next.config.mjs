/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: '/seo-n1',
    // output: 'export',
    images: {
        unoptimized: true,
        domains: ["rank1pro.com"], // Add your image hosting domain
    },
    trailingSlash: true,
    eslint: {
        ignoreDuringBuilds: true, // Disables ESLint checks during builds
    },
};

export default nextConfig;



// import bundleAnalyzer from '@next/bundle-analyzer';

// /** @type {import('next').NextConfig} */
// const nextConfig = async () => {
//   const withBundleAnalyzer = bundleAnalyzer({
//     enabled: process.env.ANALYZE === 'true',
//   });

//   return withBundleAnalyzer({
//     // basePath: '/seo-n1',
//     output: 'export',
//     images: {
//       unoptimized: true,
//       domains: ["rank1pro.com"], // Add your image hosting domain
//     },
//     trailingSlash: true,
//     eslint: {
//       ignoreDuringBuilds: true, // Disables ESLint checks during builds
//     },
//   });
// };

// export default nextConfig;
