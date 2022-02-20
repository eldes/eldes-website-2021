import Category from '../model/Category'
import piecesRepository from './pieces-repository'

import brasilNaBagagemThumbnail from '../public/content/brasil-na-bagagem-textbook-illustrations/thumbnail.jpg'
import ajudaris20Thumbnail from '../public/content/ajudaris-20-childrens-book-illustrations/thumbnail.jpg'
import ajudaris17Thumbnail from '../public/content/ajudaris-17-childrens-book-illustrations/thumbnail.jpg'
import protestWhiteboardAnimationThumbnail from '../public/content/protest-whiteboard-animation/thumbnail.jpg'
import borealFlipBookThumbnail from '../public/content/flip-book-boreal/thumbnail.jpg'
import limpidusWhiteboardAnimationThumbnail from '../public/content/limpidus-whiteboard-animation/thumbnail.jpg'

const categoriesRepository = {
	loadAll: () => categoriesMock,
	load: (slug: string) => categoriesMock.find( category => category.slug === slug ),
	loadAllPieces: (slug: string) => piecesRepository.loadAll().filter(piece => piece.categorySlugs.includes(slug))
}

export default categoriesRepository

const categoriesMock: Category[] = [
	{
		title: 'Chidren\'s Books and Textbooks',
		slug: 'childrens-books-and-textbooks',
		thumbnails: [
			brasilNaBagagemThumbnail,
			ajudaris20Thumbnail,
			ajudaris17Thumbnail,
		]
	},
	{
		title: 'Animation',
		slug: 'animation',
		thumbnails: [
			protestWhiteboardAnimationThumbnail,
			limpidusWhiteboardAnimationThumbnail,
			borealFlipBookThumbnail,
		]
	},
]