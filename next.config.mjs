/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,  // Your existing TypeScript config
    },
    webpack: (config, { isServer }) => {
        // Enable WebAssembly support
        config.experiments = { 
            ...config.experiments,
            asyncWebAssembly: true,  // Enable async WebAssembly support
        };

        // Add .wasm extension to the resolve options
        config.resolve.extensions.push('.wasm');

        return config;
    },
};

export default nextConfig;
