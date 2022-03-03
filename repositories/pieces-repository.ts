import Piece from '../models/Piece'
import categoriesRepository from './categories-repository'

const piecesRepository = {
	loadAll: () => piecesMock,

	load: (slug: string) => piecesMock.find(piece => piece.slug === slug),

	loadAllCategories: (slug: string) => categoriesRepository.loadAll().filter(category => category.pieceSlugs.includes(slug)),
}

export default piecesRepository

const piecesMock: Piece[] = [
	{
		slug: 'brasil-na-bagagem-textbook-illustrations',
		title: 'Brasil na Bagagem',
		subtitle: 'Textbook illustrations',
		thumbnail: '/content/brasil-na-bagagem-textbook-illustrations/thumbnail.jpg',
	},
	{
		slug: 'historias-da-ajudaris-20-childrens-book-illustrations',
		title: 'Histórias da Ajudaris\'20',
		subtitle: 'Children\'s book illustrations',
		thumbnail: '/content/ajudaris-20-childrens-book-illustrations/thumbnail.jpg',
	},
	{
		slug: 'historias-da-ajudaris-17-childrens-book-illustrations',
		title: 'Histórias da Ajudaris\'17',
		subtitle: 'Children\'s book illustrations',
		thumbnail: '/content/ajudaris-17-childrens-book-illustrations/thumbnail.jpg',
	},
	{
		slug: 'gramatica-fundamental-5-moderna-textbook-illustrations',
		title: 'Gramática Fundamental 5',
		subtitle: 'Textbook illustrations',
		thumbnail: '/content/gramatica-fundamental-5-moderna-textbook-illustrations/thumbnail.jpg',
	},
	{
		slug: 'protest-whitebard-animation',
		title: 'Protest',
		subtitle: 'Whiteboard animation',
		thumbnail: '/content/protest-whiteboard-animation/thumbnail.jpg',
	},
	{
		slug: 'limpidus-whiteboard-animation',
		title: 'Limpidus',
		subtitle: 'Whiteboard animation',
		thumbnail: '/content/limpidus-whiteboard-animation/thumbnail.jpg',
	},
	{
		slug: 'embrapa-whiteboard-animation',
		title: 'Embrapa',
		subtitle: 'Whiteboard animation',
		thumbnail: '/content/embrapa-whiteboard-animation/thumbnail.jpg',
	},
	{
		slug: 'penguin-story-flip-book',
		title: 'Penguin Story',
		subtitle: 'Flip book ',
		thumbnail: '/content/penguin-story-flip-book/thumbnail.jpg',
	},
	{
		slug: 'boreal-textbook-flip-book',
		title: 'Boreal Textbook',
		subtitle: 'Flip book',
		thumbnail: '/content/boreal-textbook-flip-book/thumbnail.jpg',
	},
]