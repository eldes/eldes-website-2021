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
		pixCode: '00020126930014br.gov.bcb.pix01364b77b8e4-aaa2-4252-8917-b5a485236c580231fonteeldescordeldesktop1unidade27600016BR.COM.PAGSEGURO0136B99DEF09-8F7D-494E-9544-9FAEF589A5AB520400005303986540565.005802BR5922Eldes de Paula Oliveir6010SAO CARLOS62290525PAGS0000065002109221246726304E543',
	},
	{
		fontSlug: 'font-eldes-cordel',
		licenseSlug: 'logotype-license',
		price: {
			en: { amount: 7, currency: Locales.en.currency },
			br: { amount: 21, currency: Locales.br.currency },
		},
		pixCode: '00020126940014br.gov.bcb.pix01364b77b8e4-aaa2-4252-8917-b5a485236c580232fonteeldescordellogotype1unidade27600016BR.COM.PAGSEGURO01361946AC00-9C70-4004-B422-D3EC23B66D45520400005303986540521.005802BR5922Eldes de Paula Oliveir6010SAO CARLOS62290525PAGS0000021002205011705866304D4F4',
	},
]