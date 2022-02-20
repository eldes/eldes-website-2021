import PieceList from '../components/PieceList'
import Page, { PageSection } from '../components/Page'
import piecesRepository from '../repositories/pieces-repository'
import Piece from '../model/Piece'
import { FunctionComponent } from 'react'
import Category from '../model/Category'
import { PageReverseNavigationBarLink } from './PageReverseNavigationBar'

type Props = {
	category: Category
	pieces: Piece[]
}

const CategoryPage: FunctionComponent<Props> = ({ category, pieces }) => {

	const backwardLink: PageReverseNavigationBarLink = {
		text: 'Portfolio',
		href: '/portfolio',	
	}

	return (
		<Page title={category.title} section={ PageSection.Portfolio } backwardLink={ backwardLink }>
			<PieceList pieces={ pieces } />
		</Page>
	)
}

export default CategoryPage