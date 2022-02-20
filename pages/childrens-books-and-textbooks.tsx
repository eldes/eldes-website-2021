import { GetStaticProps, NextPage } from 'next'
import CategoryPage from '../components/CategoryPage'
import Category from '../model/Category'
import Piece from '../model/Piece'
import categoriesRepository from '../repositories/categories-repository'

type Props = {
	category: Category
	pieces: Piece[]
}

const ChildrensBooksAndTextbooksPage: NextPage<Props> = ({ category, pieces }) => <CategoryPage category={ category } pieces={ pieces } />

export const getStaticProps: GetStaticProps = async (context) => {
	const slug = 'childrens-books-and-textbooks'
	return {
		props: {
			category: categoriesRepository.load(slug),
			pieces: categoriesRepository.loadAllPieces(slug)
		}
	}
}

export default ChildrensBooksAndTextbooksPage