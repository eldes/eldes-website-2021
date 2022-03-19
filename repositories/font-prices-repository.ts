import FontPrice from '../models/FontPrice'

const fontPricesRepository = {
	loadAllByFont: (fontSlug: string) => fontPricesMockup.filter( price => price.fontSlug === fontSlug)
}

export default fontPricesRepository

const fontPricesMockup: FontPrice[] = [
	{
		fontSlug: 'font-eldes-cordel',
		licenseSlug: 'desktop-license',
		amount: {
			en: 22,
			br: 65,
		},
	},
	{
		fontSlug: 'font-eldes-cordel',
		licenseSlug: 'logotype-license',
		amount: {
			en: 12,
			br: 33,
		},
	},
]