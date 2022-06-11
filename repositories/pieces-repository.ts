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
			en: 'Textbook illustrations',
			br: 'Ilustrações para livro didático',
		},
		thumbnail: '/content/brasil-na-bagagem-textbook-illustrations/thumbnail.jpg',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'historias-da-ajudaris-20-childrens-book-illustrations',
		title: {
			en: 'Histórias da Ajudaris\'20',
			br: 'Histórias da Ajudaris\'20',
		},
		subtitle: {
			en: 'Children\'s book illustrations',
			br: 'Ilustrações para livro infantil',
		},
		thumbnail: '/content/ajudaris-20-childrens-book-illustrations/thumbnail.jpg',
		description: {
			en: '',
			br: '',
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
			en: 'Children\'s book illustrations',
			br: 'Ilustrações para livro infantil',
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
			en: 'Illustrations',
			br: 'Ilustrações',
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
			en: 'Illustrations',
			br: 'Ilustrações',
		},
		thumbnail: '/content/la-maison-qui-pue-magazine/thumbnail.png',
		description: {
			en: '',
			br: '',
		},
	},
	{
		slug: 'hipocrisil',
		title: {
			en: 'Hipocrisil',
			br: 'Hipocrisil',
		},
		subtitle: {
			en: 'Illustration',
			br: 'Ilustração',
		},
		thumbnail: '/content/hipocrisil/thumbnail.png',
		description: {
			en: '',
			br: '',
		},
	},

	{
		slug: 'baseball-guide',
		title: {
			en: 'Baseball Guide',
			br: 'Guia de Beisebol',
		},
		subtitle: {
			en: 'Design and illustrations',
			br: 'Design e ilustrações',
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
			en: 'Flip book',
			br: 'Flip book',
		},
		thumbnail: '/content/boreal-textbook-flip-book/thumbnail.jpg',
		description: {
			en: '',
			br: '',
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