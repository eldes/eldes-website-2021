import Category from '../models/Category'
import piecesRepository from './pieces-repository'

const categoriesRepository = {
	loadAll: () => categoriesMock,
	load: (slug: string) => categoriesMock.find( category => category.slug === slug ),
	loadAllPieces: (slug: string) => categoriesRepository.load(slug)?.pieceSlugs.map(pieceSlug => piecesRepository.load(pieceSlug))
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
		],
	},
	{
		title: 'Animation',
		subtitle: 'and flip book',
		slug: 'animation',
		thumbnails: [
			'/content/protest-whiteboard-animation/thumbnail.jpg',
			'/content/flip-book-penguin-story/thumbnail.jpg',
			'/content/flip-book-boreal/thumbnail.jpg',
		],
		pieceSlugs: [
			'protest-whitebard-animation',
			'limpidus-whiteboard-animation',
			'embrapa-whiteboard-animation',
			'flip-book-penguin-story',
			'flip-book-boreal',
		],
	},
]