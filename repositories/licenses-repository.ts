import License from '../models/License'
import { Locale } from '../models/Locale'

const licensesRepository = {
	load: (slug: string) => licensesMock.find(license => license.slug === slug)
}

const licensesMock: License[] = [
	{
		slug: 'desktop-license',
		name: 'Desktop',
		resume: {
			en: 'You can install the Font software in your own computer to create graphical designs (logos, signs, etc.) and products (mugs, t-shirts, hats, etc.) for yourself or your client.',
			br: 'Você pode instalar o software da Fonte no seu próprio computador para criar peças de design gráfico (logotipos, sinais etc) e produtos (canecas, camisetas, bonés etc) para você mesmo ou seu cliente.'
		},
	},
	{
		slug: 'logotype-license',
		name: 'Logotype',
		resume: {
			en: 'You can use the font to create a single logotype.',
			br: 'Você pode usar a fonte para criar um único logotipo.',
		},
	},
	{
		slug: 'site-license',
		name: 'Site',
		resume: {
			en: 'You can embed the font in the HTML/CSS of your single site allowing your viewers to see your custom typography.',
			br: 'Você pode incorporar a fonte no HTML/CSS de um único site permitindo que seus visitantes vejam sua tipografia personalizada.',
		}
	},
	{
		slug: 'app-license',
		name: 'App',
		resume: {
			en: 'You can embed the font in your single app allowing your users to see your custom typography.',
			br: 'Você pode incorporar a fonte no projeto de um único app permitindo que seus usuários vejam sua tipografia personalizada.',
		}
	},
	{
		slug: 'ebook-license',
		name: 'E-Book',
		resume: {
			en: 'You can embed the font in your single e-book allowing your readers to see your custom typography.',
			br: 'Você pode incorporar a fonte em um único e-book permitindo que seus leitores vejam sua tipografia personalizada.',
		}
	},
]

export default licensesRepository