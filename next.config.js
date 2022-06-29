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
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'eldes.com.br',
					},
				],
				destination: 'https://eldes.com/br/:path*',
				permanent: false,
			},
			{
				source: '/',
				destination: '/portfolio',
				permanent: false,
			},
			{
				source: '/fonte-eldes-cordel',
				destination: '/font-eldes-cordel',
				permanent: false,
			},

			// TEMP:
			{
				source: '/shirt-robocop-ed-209',
				destination: 'https://www.teepublic.com/t-shirt/32390970-blueprint-robocop-ed-209?store_id=1034820',
				permanent: false,
			},
		]
	},
}