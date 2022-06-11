/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

module.exports = {
	reactStrictMode: true,
	i18n,

	async redirects() {
		return [
			{
				source: '/',
				destination: '/portfolio',
				permanent: false,
			},
			{
				source: '/fonte-eldes-cordel',
				destination: '/font-eldes-cordel',
				permanent: true,
			},
		]
	},
}