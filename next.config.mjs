/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  sassOptions: {
    //includePaths: [path.join(__dirname, 'src/styles')],
    //prependData: `@use "${path.resolve(__dirname, 'src/styles/main.scss')}";`,
    //additionalData: `@import "main";`,
    prependData: `
    @use 'src/styles/_variables.scss' as *;
    `,
  },
};

export default nextConfig;
