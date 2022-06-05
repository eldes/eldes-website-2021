import Category from '../models/Category';
import { CategoryHighlight } from '../models/CategoryHighlight';
import Piece from '../models/Piece';
import piecesRepository from './pieces-repository';

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
		title: {
			en: 'Chidren\'s Books',
			br: 'Livros infantis',
		},
		subtitle: {
			en: 'and Textbooks',
			br: 'e Didáticos',
		},
		slug: 'childrens-books-and-textbooks',
		highlight: CategoryHighlight.High,
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
			'poeminhas-reais-childrens-book-illustration',
			'como-eram-os-animais-cordel-childrens-book',
			'historias-da-ajudaris-19-childrens-book-illustrations',
			'a-ultima-flor-de-abril-childrens-book',
		],
	},
	{
		title: {
			en: 'Animation',
			br: 'Animação',
		},
		subtitle: {
			en:'and flip book',
			br: 'e flip book',
		},
		slug: 'animation',
		highlight: CategoryHighlight.High,
		thumbnails: [
			'/content/protest-whiteboard-animation/thumbnail.jpg',
			'/content/penguin-story-flip-book/thumbnail.jpg',
			'/content/boreal-textbook-flip-book/thumbnail.jpg',
		],
		pieceSlugs: [
			'protest-whiteboard-animation',
			'limpidus-whiteboard-animation',
			'embrapa-whiteboard-animation',
			'penguin-story-flip-book',
			'boreal-textbook-flip-book',
		],
	},
	{
		title: {
			en: 'Editorial',
			br: 'Editorial',
		},
		subtitle: {
			en:'magazines and newspaper',
			br: 'revistas e jornais',
		},
		slug: 'editorial',
		highlight: CategoryHighlight.High,
		thumbnails: [
			'/content/ilustrar-magazine-20/thumbnail.jpg',
			'/content/la-maison-qui-pue-magazine/thumbnail.png',
			'/content/ilustrar-magazine-20/thumbnail.jpg',
		],
		pieceSlugs: [
			'ilustrar-magazine-20',
			'la-maison-qui-pue-magazine',
		]
	},
	{
		title: {
			en: 'Sketchbooks',
			br: 'Sketchbooks',
		},
		subtitle: {
			en:'and fine art',
			br: 'e arte tradicional',
		},
		slug: 'sketchbooks',
		highlight: CategoryHighlight.Low,
		thumbnails: [
			'/content/sketchbook-number-4/thumbnail.jpg',
			'/content/sketchbook-number-4/thumbnail.jpg',
		],
		pieceSlugs: [
			'sketchbook-number-4'
		]
	},
]