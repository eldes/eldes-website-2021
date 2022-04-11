import FontPrice from '../models/FontPrice';

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
		pixCode: '00020126930014br.gov.bcb.pix01364b77b8e4-aaa2-4252-8917-b5a485236c580231fonteeldescordeldesktop1unidade27600016BR.COM.PAGSEGURO0136B99DEF09-8F7D-494E-9544-9FAEF589A5AB520400005303986540565.005802BR5922Eldes de Paula Oliveir6010SAO CARLOS62290525PAGS0000065002109221246726304E543'
	},
]