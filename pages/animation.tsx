import { GetStaticProps, NextPage } from 'next'
import CategoryPage from '../components/CategoryPage'
import Category from '../models/Category'
import Piece from '../models/Piece'
import categoriesRepository from '../repositories/categories-repository'

type Props = {
	category: Category
	pieces: Piece[]
}

const AnimationPage: NextPage<Props> = ({ category, pieces }) => <CategoryPage category={ category } pieces={ pieces } />

export const getStaticProps: GetStaticProps = async (_) => {
	const slug = 'animation'
	return {
		props: {
			category: categoriesRepository.load(slug),
			pieces: categoriesRepository.loadAllPieces(slug)
		}
	}
}

export default AnimationPage