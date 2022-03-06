import Category from '../models/Category'
import Piece from '../models/Piece'
import piecesRepository from './pieces-repository'

const categoriesRepository = {
	
	loadAll: () => categoriesMock,
	
	load: (slug: string) => categoriesMock.find( category => category.slug === slug ),

	loadAllPieces: (slug: string) => {
		const pieces: Piece[] = []
		
		categoriesRepository.load(slug)?.pieceSlugs.forEach(pieceSlug => {
			const piece = piecesRepository.load(pieceSlug)
			if (piece) {
				pieces.push(piece)
			}
		})

		return pieces
	}
}

export default categoriesRepository

const categoriesMock: Category[] = [
	{
		title: 'Chidren\'s Books',
		subtitle: 'and Textbooks',
		slug: 'childrens-books-and-textbooks',
		thumbnails: [
			'/content/brasil-na-bagagem-textbook-illustrations/thumbnail.jpg',
			'/content/ajudaris-20-childrens-book-illustrations/thumbnail.jpg',
			'/content/ajudaris-17-childrens-book-illustrations/thumbnail.jpg',
		],
		pieceSlugs: [
			'brasil-na-bagagem-textbook-illustrations',
			'gramatica-fundamental-5-moderna-textbook-illustrations',
			'historias-da-ajudaris-20-childrens-book-illustrations',
			'historias-da-ajudaris-17-childrens-book-illustrations',
			'como-eram-os-animais-cordel-childrens-book',
		],
	},
	{
		title: 'Animation',
		subtitle: 'and flip book',
		slug: 'animation',
		thumbnails: [
			'/content/protest-whiteboard-animation/thumbnail.jpg',
			'/content/penguin-story-flip-book/thumbnail.jpg',
			'/content/boreal-textbook-flip-book/thumbnail.jpg',
		],
		pieceSlugs: [
			'protest-whitebard-animation',
			'limpidus-whiteboard-animation',
			'embrapa-whiteboard-animation',
			'penguin-story-flip-book',
			'boreal-textbook-flip-book',
		],
	},
]