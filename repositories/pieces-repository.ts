import Piece from '../model/Piece'

const piecesRepository = {
	loadAll: () => piecesMock,
	load: (slug: string) => piecesMock.find(piece => piece.slug === slug)
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
		subtitle: 'Textbook illustrations',
		thumbnail: '/content/ajudaris-20-childrens-book-illustrations/thumbnail.jpg',
	},
	{
		slug: 'historias-da-ajudaris-17-childrens-book-illustrations',
		title: 'Histórias da Ajudaris\'17',
		subtitle: 'Textbook illustrations',
		thumbnail: '/content/ajudaris-17-childrens-book-illustrations/thumbnail.jpg',
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
		slug: 'flip-book-penguin-story',
		title: 'Penguin Story',
		subtitle: 'Flip book ',
		thumbnail: '/content/flip-book-penguin-story/thumbnail.jpg',
	},
	{
		slug: 'flip-book-boreal',
		title: 'Boreal Textbook',
		subtitle: 'Flip book',
		thumbnail: '/content/flip-book-boreal/thumbnail.jpg',
	},
]