const fontsRepository = {

	loadAll: () => fonts,

	load: (slug: string) => fonts.find(font => font.slug === slug)
}

export default fontsRepository

const fonts = [
	{
		slug: 'font-eldes-cordel',
		name: 'Cordel',
		thumbnail: '/content/font-eldes-cordel/thumbnail.png'
	}
]