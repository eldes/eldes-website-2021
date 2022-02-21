import Category from '../model/Category'
import piecesRepository from './pieces-repository'

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
			'/content/brasil-na-bagagem-textbook-illustrations/thumbnail.jpg',
			'/content/ajudaris-20-childrens-book-illustrations/thumbnail.jpg',
			'/content/ajudaris-17-childrens-book-illustrations/thumbnail.jpg',
		]
	},
	{
		title: 'Animation',
		slug: 'animation',
		thumbnails: [
			'/content/protest-whiteboard-animation/thumbnail.jpg',
			'/content/limpidus-whiteboard-animation/thumbnail.jpg',
			'/content/flip-book-boreal/thumbnail.jpg',
		]
	},
]