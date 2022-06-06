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
	},
]