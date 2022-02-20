import Piece from '../model/Piece'

import brasilNaBagagemThumbnail from '../public/content/brasil-na-bagagem-textbook-illustrations/thumbnail.jpg'
import ajudaris20Thumbnail from '../public/content/ajudaris-20-childrens-book-illustrations/thumbnail.jpg'
import ajudaris17Thumbnail from '../public/content/ajudaris-17-childrens-book-illustrations/thumbnail.jpg'
import protestWhiteboardAnimationThumbnail from '../public/content/protest-whiteboard-animation/thumbnail.jpg'
import borealFlipBookThumbnail from '../public/content/flip-book-boreal/thumbnail.jpg'
import limpidusWhiteboardAnimationThumbnail from '../public/content/limpidus-whiteboard-animation/thumbnail.jpg'

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
		thumbnailSrc: brasilNaBagagemThumbnail,
		categorySlugs: ['childrens-books-and-textbooks'],
	},
	{
		slug: 'historias-da-ajudaris-20-childrens-book-illustrations',
		title: 'Histórias da Ajudaris\'20',
		subtitle: 'Textbook illustrations',
		thumbnailSrc: ajudaris20Thumbnail,
		categorySlugs: ['childrens-books-and-textbooks'],
	},
	{
		slug: 'historias-da-ajudaris-17-childrens-book-illustrations',
		title: 'Histórias da Ajudaris\'17',
		subtitle: 'Textbook illustrations',
		thumbnailSrc: ajudaris17Thumbnail,
		categorySlugs: ['childrens-books-and-textbooks'],
	},
	{
		slug: 'protest-whitebard-animation',
		title: 'Protest',
		subtitle: 'Whiteboard animation',
		thumbnailSrc: protestWhiteboardAnimationThumbnail,
		categorySlugs: ['animation'],
	},
	{
		slug: 'limpidus-whiteboard-animation',
		title: 'Limpidus',
		subtitle: 'Whiteboard animation',
		thumbnailSrc: limpidusWhiteboardAnimationThumbnail,
		categorySlugs: ['animation'],
	},
	{
		slug: 'flip-book-boreal',
		title: 'Boreal Textbook',
		subtitle: 'Flip book animation',
		thumbnailSrc: borealFlipBookThumbnail,
		categorySlugs: ['animation'],
	},
]