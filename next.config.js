/** @type {import('next').NextConfig} */
const { i18n, i18nRoutes } = require('./next-i18next.config')

module.exports = {
	reactStrictMode: true,
	i18n,

	async redirects() {
		return [

			// Locale domain:
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
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'www.eldes.com.br',
					},
				],
				destination: 'https://www.eldes.com/br/:path*',
				permanent: false,
			},

			// Legacy links:
			{
				source: '/poeminhas-florais',
				destination: '/br/poeminhas-florais-ilustracoes-livros-infantis',
				permanent: true,
			},
			{
				source: '/tipografia-fonte-eldes-cordel',
				destination: '/font-eldes-cordel',
				permanent: true,
			},
			{
				source: '/font-eldes-grunge',
				destination: '/font-gritty-ink',
				permanent: true,
			},

			// TEMP:
			{
				source: '/shirt-robocop-ed-209',
				destination: 'https://www.teepublic.com/t-shirt/32390970-blueprint-robocop-ed-209?store_id=1034820',
				permanent: false,
			},
		].concat(i18nRoutes.br.map((route) => { // Locale routes:
			return {
				source: `/br${route.destination}`,
				destination: `/br${route.source}`,
				locale: false,
				permanent: true,
			}
		}))
	},

	async rewrites() {
    return {
			fallback: [
			].concat(i18nRoutes.br.map((route) => { // Locale routes:
				return {
					source: `/br${route.source}`,
					destination: `/br${route.destination}`,
					locale: false,
				}
			})),
		}
  },
}