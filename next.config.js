/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

module.exports = {
	reactStrictMode: true,
	i18n,

	async rewrites() {
		return {
			beforeFiles: [
				{
					source: '/:path*',
					has: [
						{
							type: 'host',
							value: 'eldes.com.br',
						},
					],
					destination: '/br/:path*',
				},
			],
		}
	},

	async redirects() {
		return [
			{
				source: '/',
				destination: '/portfolio',
				permanent: false,
			},
			{
				source: '/fonte-eldes-cordel',
				destination: '/br/font-eldes-cordel',
				permanent: false,
			},
		]
	},
}