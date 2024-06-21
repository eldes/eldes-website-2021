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
	{
		fontSlug: 'font-gritty-ink',
		licenseSlug: 'desktop-license',
		price: {
			en: { amount: 9, currency: Locales.en.currency },
			br: { amount: 50, currency: Locales.br.currency },
		},
		pixCode: '00020101021126860014br.gov.bcb.pix0114544206100001730246Fonte Gritty Ink - Licenca Desktop - 1 unidade520400005303986540550.005802BR5914ELDES P O LTDA6009SAO PAULO62070503***6304AFB9',
	},
	{
		fontSlug: 'font-gritty-ink',
		licenseSlug: 'logotype-license',
		price: {
			en: { amount: 3, currency: Locales.en.currency },
			br: { amount: 16, currency: Locales.br.currency },
		},
		pixCode: '00020101021126870014br.gov.bcb.pix0114544206100001730247Fonte Gritty Ink - Licenca Logotype - 1 unidade520400005303986540516.005802BR5914ELDES P O LTDA6009SAO PAULO62070503***63048B4A',
	},
	{
		fontSlug: 'font-gritty-ink',
		licenseSlug: 'site-license',
		price: {
			en: { amount: 18, currency: Locales.en.currency },
			br: { amount: 100, currency: Locales.br.currency },
		},
		pixCode: '00020101021126830014br.gov.bcb.pix0114544206100001730243Fonte Gritty Ink - Licenca Site - 1 unidade5204000053039865406100.005802BR5914ELDES P O LTDA6009SAO PAULO62070503***63045EDB',
	},
]