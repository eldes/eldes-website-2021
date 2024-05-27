import FontPrice from '../models/FontPrice';
import { Locales } from '../models/Locale';

const fontPricesRepository = {
	loadAllByFont: (fontSlug: string) => fontPricesMockup.filter( price => price.fontSlug === fontSlug)
}

export default fontPricesRepository

const fontPricesMockup: FontPrice[] = [
	{
		fontSlug: 'font-eldes-cordel',
		licenseSlug: 'desktop-license',
		price: {
			en: { amount: 22, currency: Locales.en.currency },
			br: { amount: 65, currency: Locales.br.currency },
		},
		pixCode: '00020101021126880014br.gov.bcb.pix0114544206100001730248Fonte Eldes Cordel - Licenca Desktop - 1 unidade520400005303986540565.005802BR5914ELDES P O LTDA6009SAO PAULO62070503***6304BDC0',
	},
	{
		fontSlug: 'font-eldes-cordel',
		licenseSlug: 'logotype-license',
		price: {
			en: { amount: 7, currency: Locales.en.currency },
			br: { amount: 21, currency: Locales.br.currency },
		},
		pixCode: '00020101021126890014br.gov.bcb.pix0114544206100001730249Fonte Eldes Cordel - Licenca Logotype - 1 unidade520400005303986540521.005802BR5914ELDES P O LTDA6009SAO PAULO62070503***63049623',
	},
	{
		fontSlug: 'font-eldes-cordel',
		licenseSlug: 'site-license',
		price: {
			en: { amount: 44, currency: Locales.en.currency },
			br: { amount: 130, currency: Locales.br.currency },
		},
		pixCode: '00020101021126850014br.gov.bcb.pix0114544206100001730245Fonte Eldes Cordel - Licenca Site - 1 unidade5204000053039865406130.005802BR5914ELDES P O LTDA6009SAO PAULO62070503***630412D7',
	},
]