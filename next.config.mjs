/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'filedn.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
