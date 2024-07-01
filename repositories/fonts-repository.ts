import Font from '../models/Font';

const fontsRepository = {

	loadAll: () => fonts,

	load: (slug: string) => fonts.find(font => font.slug === slug)
}

export default fontsRepository

const fonts: Font[] = [
	{
		slug: 'font-eldes-cordel',
		name: 'Cordel',
		thumbnail: '/content/font-eldes-cordel/thumbnail.png',
		description: {
			en: 'Font inspired directly in the woodcut — especially in the covers of the Cordel literature booklets — and originally created mainly to compose graphic pieces that have Brazilian culture as reference and or that want to transmit the concept of handmade, this type brings some of the visual characteristic of such printing technique, such as the gaps and inaccuracies of the notch in the wood matrix.',
			br: 'Inspirada diretamente na xilogravura — em especial nas capas dos folhetos de literatura de cordel — e criada principalmente para compor peças gráficas que tenham a cultura brasileira como referência e que queiram transmitir o conceito de “feito a mão”, a fonte Eldes Cordel traz algumas das características visuais dessa técnica de impressão, como as falhas e imprecisões do entalhe na matriz de madeira.',
		},
	},
	{
		slug: 'font-gritty-ink',
		name: 'Gritty Ink',
		thumbnail: '/content/font-gritty-ink/thumbnail.jpg',
		description: {
			en: 'Introducing Gritty Ink – a font that screams rebellion and defiance with every stroke, embracing the raw energy of punk rock and the gritty aesthetic of 90\'s grunge with its authentic and handcrafted typography. It adds a bold touch to any graphic piece, with irregular edges and uneven lines that capture the DIY spirit of these cultures. Pair it with bold graphics and distressed textures for an unmistakably rebellious look. Including alternate glyphs and ligatures, Gritty Ink offers diverse customization possibilities. Embrace the chaos and unleash your creativity with this bold and defiant typeface.',
			br: 'Apresentando Gritty Ink – uma fonte que exala rebeldia e desafio a cada traço, abraçando a energia crua do punk rock e a estética áspera do grunge dos anos 90 com sua tipografia autêntica e artesanal. Ela adiciona um toque ousado a qualquer peça gráfica, com bordas irregulares e linhas desiguais que capturam o espírito “faça você mesmo” dessas culturas. Combine-a com gráficos audaciosos e texturas desgastadas para um visual inconfundivelmente rebelde. Incluindo glifos alternativos e ligaduras, Gritty Ink oferece possibilidades diversas de personalização. Abrace o caos e libere sua criatividade com esta fonte ousada e desafiadora.',
		},
	}
]