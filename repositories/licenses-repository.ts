import License from '../models/License'

const licensesRepository = {
	load: (slug: string) => licensesMock.find(license => license.slug === slug)
}

const licensesMock: License[] = [
	{
		slug: 'desktop-license',
		name: 'Desktop',
		resume: 'You can install the Font software in your own computer to create graphical designs (logos, signs, etc.) and products (mugs, t-shirts, hats, etc.) for yourself or your client.',
	},
	{
		slug: 'logotype-license',
		name: 'Logotype',
		resume: 'You can use the font to create a single logotype.',
	},
	{
		slug: 'site-license',
		name: 'Site',
		resume: 'You can embed the font in the HTML/CSS of your single site allowing your viewers to see your custom typography.',
	},
	{
		slug: 'app-license',
		name: 'App',
		resume: 'You can embed the font in your single app allowing your users to see your custom typography.',
	},
	{
		slug: 'ebook-license',
		name: 'E-Book',
		resume: 'You can embed the font in your single e-book allowing your readers to see your custom typography.',
	},
]

export default licensesRepository