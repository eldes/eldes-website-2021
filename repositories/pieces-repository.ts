import Piece from '../models/Piece';
import categoriesRepository from './categories-repository';

const piecesRepository = {
	loadAll: () => piecesMock,

	load: (slug: string) => piecesMock.find(piece => piece.slug === slug),

	loadAllCategories: (slug: string) => categoriesRepository.loadAll().filter(category => category.pieceSlugs.includes(slug)),
}

export default piecesRepository

const piecesMock: Piece[] = [

	//
	// Children's book and textbooks:
	//

	{
		slug: 'brasil-na-bagagem-textbook-illustrations',
		title: {
			en: 'Brasil na Bagagem',
			br: 'Brasil na Bagagem',
		},
		subtitle: {
			en: 'textbook illustrations',
			br: 'ilustrações para livro didático',
		},
		thumbnail: '/content/brasil-na-bagagem-textbook-illustrations/thumbnail.jpg',
		description: {
			en: 'Textbook illustrations for this book aimed at children and teenagers living outside of Brazil.',
			br: 'Ilustrações para livro didático destinado a crianças e adolescentes vivendo fora do Brasil.',
		},
	},
	{
		slug: 'historias-da-ajudaris-20-childrens-book-illustrations',
		title: {
			en: 'Histórias da Ajudaris\'20',
			br: 'Histórias da Ajudaris\'20',
		},
		subtitle: {
			en: 'children\'s book illustrations',
			br: 'ilustrações para livro infantil',
		},
		thumbnail: '/content/ajudaris-20-childrens-book-illustrations/thumbnail.jpg',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'water-sustainability-textbook-cover-illustration',
		title: {
			en: 'Water and Sustainability',
			br: 'Água e Sustentabilidade',
		},
		subtitle: {
			en: 'textbook cover illustrations',
			br: 'ilustrações para capa de livro didático',
		},
		thumbnail: '/content/water-sustainability-textbook-cover-illustration/thumbnail.png',
		description: {
			en: 'Illustration and design of book covers in the Water and Sustainability series, by ProfCiAmb.',
			br: 'Ilustração e design das capas dos livros da série Água e Sustentabilidade, do ProfCiAmb.',
		},
	},
	{
		slug: 'historias-da-ajudaris-19-childrens-book-illustrations',
		title: {
			en: 'Histórias da Ajudaris\'19',
			br: 'Histórias da Ajudaris\'19',
		},
		subtitle: {
			en: 'Children\'s book illustrations',
			br: 'Ilustrações para livro infantil',
		},
		thumbnail: '/content/historias-da-ajudaris-19-childrens-book-illustrations/thumbnail.jpg',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'historias-da-ajudaris-17-childrens-book-illustrations',
		title: {
			en: 'Histórias da Ajudaris\'17',
			br: 'Histórias da Ajudaris\'17',
		},
		subtitle: {
			en: 'Children\'s book illustrations',
			br: 'Ilustrações para livro infantil',
		},
		thumbnail: '/content/ajudaris-17-childrens-book-illustrations/thumbnail.jpg',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'gramatica-fundamental-5-moderna-textbook-illustrations',
		title: {
			en: 'Gramática Fundamental 5',
			br: 'Gramática Fundamental 5',
		},
		subtitle: {
			en: 'Textbook illustrations',
			br: 'Ilustrações para livro didático',
		},
		thumbnail: '/content/gramatica-fundamental-5-moderna-textbook-illustrations/thumbnail.jpg',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'poeminhas-reais-childrens-book-illustration',
		title: {
			en: 'Poeminhas Reais',
			br: 'Poeminhas Reais',
		},
		subtitle: {
			en: 'Children\'s book illustrations',
			br: 'Ilustrações para livro infantil',
		},
		thumbnail: '/content/poeminhas-reais-childrens-book-illustration/thumbnail.jpg',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'poeminhas-florais-childrens-book-illustrations',
		title: {
			en: 'Poeminhas Florais',
			br: 'Poeminhas Florais',
		},
		subtitle: {
			en: 'Children\'s book illustrations',
			br: 'Ilustrações para livro infantil',
		},
		thumbnail: '/content/poeminhas-florais-childrens-book-illustrations/thumbnail.jpg',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'como-eram-os-animais-cordel-childrens-book',
		title: {
			en: 'Como eram os animais',
			br: 'Como eram os animais',
		},
		subtitle: {
			en: 'Children\'s book illustrations',
			br: 'Ilustrações para livro infantil',
		},
		thumbnail: '/content/como-eram-os-animais-cordel-childrens-book/thumbnail.png',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'a-ultima-flor-de-abril-childrens-book',
		title: {
			en: 'A última flor de abril',
			br: 'A última flor de abril',
		},
		subtitle: {
			en: 'children\'s book illustrations',
			br: 'ilustrações para livro infantil',
		},
		thumbnail: '/content/a-ultima-flor-de-abril-childrens-book/thumbnail.png',
		description: {
			en: '',
			br: '',
		},
	},

	//
	// Editorial:
	//

	{
		slug: 'ilustrar-magazine-20',
		title: {
			en: 'Ilustrar Magazine 20',
			br: 'Revista Ilustrar 20',
		},
		subtitle: {
			en: 'illustrations',
			br: 'ilustrações',
		},
		thumbnail: '/content/ilustrar-magazine-20/thumbnail.jpg',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'la-maison-qui-pue-magazine',
		title: {
			en: 'La Maison Qui Pue Magazine',
			br: 'Revista La Maison Qui Pue',
		},
		subtitle: {
			en: 'illustrations',
			br: 'ilustrações',
		},
		thumbnail: '/content/la-maison-qui-pue-magazine/thumbnail.png',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'info-corporate-magazine-illustrations',
		title: {
			en: 'INFO Corporate Magazine',
			br: 'Revista INFO Corporate',
		},
		subtitle: {
			en: 'illustrations',
			br: 'ilustrações',
		},
		thumbnail: '/content/info-corporate-magazine-illustrations/thumbnail.jpg',
		description: {
			en: 'Illustrations for articles in issue 37 of INFO Corporate magazine, by Editora Abril.',
			br: 'Ilustrações para artigos da edição 37 da revista INFO Corporate, da Editora Abril.',
		},
	},
	{
		slug: 'hipocrisil',
		title: {
			en: 'Hipocrisil',
			br: 'Hipocrisil',
		},
		subtitle: {
			en: 'illustration',
			br: 'ilustração',
		},
		thumbnail: '/content/hipocrisil/thumbnail.png',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'solidao-empresarial-editorial-illustration',
		title: {
			en: 'Solidão Empresarial',
			br: 'Solidão Empresarial',
		},
		subtitle: {
			en: 'illustration',
			br: 'ilustração',
		},
		thumbnail: '/content/solidao-empresarial-editorial-illustration/thumbnail.png',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'moitara-danca-editorial-illustration',
		title: {
			en: 'Dance',
			br: 'Dança',
		},
		subtitle: {
			en: 'illustration',
			br: 'ilustração',
		},
		thumbnail: '/content/moitara-danca-editorial-illustration/thumbnail.png',
		description: {
			en: 'Illustration for the article "Dança" from the culture section of the newspaper A Folha, in São Carlos.',
			br: 'Ilustração para o artigo "Dança" do caderno de cultura do jornal A Folha, de São Carlos.',
		},
	},
	{
		slug: 'podcast-max-gehringer',
		title: {
			en: 'Podcast Max Gehringer',
			br: 'Podcast Max Gehringer',
		},
		subtitle: {
			en: 'illustrations',
			br: 'ilustrações',
		},
		thumbnail: '/content/podcast-max-gehringer/thumbnail.png',
		description: {
			en: 'Illustrations inspired by Max Gehringer\'s "Professional Career" podcast.',
			br: 'Ilustrações inspiradas no podcast "Carreira Profissional" de Max Gehringer.',
		},
	},
	{
		slug: 'moitara-teatro-portugues-editorial-illustration',
		title: {
			en: 'Teatro Português',
			br: 'Teatro Português',
		},
		subtitle: {
			en: 'illustration',
			br: 'ilustração',
		},
		thumbnail: '/content/moitara-teatro-portugues-editorial-illustration/thumbnail.png',
		description: {
			en: 'Illustration for the article "Teatro português em cena na cidade" from the culture section of the newspaper A Folha, in São Carlos.',
			br: 'Ilustração para o artigo "Teatro português em cena na cidade" do caderno de cultura do jornal A Folha, de São Carlos.',
		},
	},

	{
		slug: 'baseball-guide',
		title: {
			en: 'Baseball Guide',
			br: 'Guia de Beisebol',
		},
		subtitle: {
			en: 'design and illustrations',
			br: 'design e ilustrações',
		},
		thumbnail: '/content/baseball-guide/thumbnail.png',
		description: {
			en: 'Book design and illustrations for a booklet to introduce baseball to Physical Education professionals, schoolchildren and the general population.',
			br: 'Projeto gráfico e ilustrações para livreto que apresenta beisebol aos profissionais de Educação Física, aos escolares e à população em geral.'
		}
	},

	//
	// Animation:
	//

	{
		slug: 'whiteboard-animation-quale-magazine-elections',
		title: {
			en: 'Qualé Magazine: Elections',
			br: 'Revista Qualé: Eleições',
		},
		subtitle: {
			en: 'Whiteboard animation',
			br: 'Animação whiteboard',
		},
		thumbnail: '/content/whiteboard-animation-quale-magazine-elections/thumbnail.jpg',
		description: {
			en: 'Whiteboard animation for Qualé Magazine as special material for you to know how to start this conversation with children and young people, preparing them for the exercise of citizenship.',
			br: 'Animação whiteboard para a Revista Qualé como material especial para que você saiba como iniciar essa conversa com as crianças e jovens, preparando eles para o exercício da cidadania.'
		},
	},
	{
		slug: 'protest-whiteboard-animation',
		title: {
			en: 'Protest',
			br: 'Protest',
		},
		subtitle: {
			en: 'Whiteboard animation',
			br: 'Animação whiteboard',
		},
		thumbnail: '/content/protest-whiteboard-animation/thumbnail.jpg',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'limpidus-whiteboard-animation',
		title: {
			en: 'Limpidus',
			br: 'Limpidus',
		},
		subtitle: {
			en: 'Whiteboard animation',
			br: 'Animação whiteboard',
		},
		thumbnail: '/content/limpidus-whiteboard-animation/thumbnail.jpg',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'embrapa-whiteboard-animation',
		title: {
			en: 'Embrapa',
			br: 'Embrapa',
		},
		subtitle: {
			en: 'Whiteboard animation',
			br: 'Animação whiteboard',
		},
		thumbnail: '/content/embrapa-whiteboard-animation/thumbnail.jpg',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'penguin-story-flip-book',
		title: {
			en: 'Penguin Story',
			br: 'Penguin Story',
		},
		subtitle: {
			en: 'Flip book ',
			br: 'Flip book ',
		},
		thumbnail: '/content/penguin-story-flip-book/thumbnail.jpg',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'boreal-textbook-flip-book',
		title: {
			en: 'Boreal Textbook',
			br: 'Livro didático Boreal',
		},
		subtitle: {
			en: 'Flip-book',
			br: 'Flip-book',
		},
		thumbnail: '/content/boreal-textbook-flip-book/thumbnail.jpg',
		description: {
			en: 'Flip-book for textbook of the publisher Boreal.',
			br: 'Flip-book para livo didático da editora Boreal.',
		},
	},

	//
	// Sketchbook:
	//

	{
		slug: 'sketchbook-number-4',
		title: {
			en: 'Sketchbook #4',
			br: 'Sketchbook #4',
		},
		subtitle: {
			en: '',
			br: '',
		},
		thumbnail: '/content/sketchbook-number-4/thumbnail.jpg',
		description: {
			en: '',
			br: '',
		},
	},
]