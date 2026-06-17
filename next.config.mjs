/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['recharts', 'es-toolkit', 'lucide-react'],
  experimental: { esmExternals: 'loose' }
};

export default nextConfig;
