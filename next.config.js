/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

module.exports = {
	reactStrictMode: true,
	i18n,

	async redirects() {
		return [
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'preview.eldes.com.br',
					},
				],
				destination: 'https://preview.eldes.com/br/:path*',
				permanent: false,
			},
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