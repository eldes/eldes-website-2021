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
		pixCode: '00020126990014br.gov.bcb.pix0136543a41ab-321b-4185-aa09-a60d65f52b090237Fonte Eldes Cordel Licenca Desktop 1 520400005303986540565.005802BR5923ELDES DE PAULA OLIVEIRA6010SAO CARLOS62200516FntCordelDesktop630451E9',
	},
	{
		fontSlug: 'font-eldes-cordel',
		licenseSlug: 'logotype-license',
		price: {
			en: { amount: 7, currency: Locales.en.currency },
			br: { amount: 21, currency: Locales.br.currency },
		},
		pixCode: '00020126990014br.gov.bcb.pix0136543a41ab-321b-4185-aa09-a60d65f52b090237Fonte Eldes Cordel Licenca Logotype 1520400005303986540521.005802BR5923ELDES DE PAULA OLIVEIRA6010SAO CARLOS62210517FntCordelLogotype6304D04D',
	},
	{
		fontSlug: 'font-eldes-cordel',
		licenseSlug: 'site-license',
		price: {
			en: { amount: 44, currency: Locales.en.currency },
			br: { amount: 130, currency: Locales.br.currency },
		},
		pixCode: '00020126930014br.gov.bcb.pix0136543a41ab-321b-4185-aa09-a60d65f52b090231Fonte Eldes Cordel Licenca Site5204000053039865406130.005802BR5923ELDES DE PAULA OLIVEIRA6010SAO CARLOS62170513FntCordelSite6304C9D3',
	},
]