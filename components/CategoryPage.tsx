import PieceList from '../components/PieceList'
import Page, { PageSection } from '../components/Page'
import piecesRepository from '../repositories/pieces-repository'
import Piece from '../models/Piece'
import { FunctionComponent } from 'react'
import Category from '../models/Category'
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
		<Page title={category.title} subtitle={category.subtitle} section={ PageSection.Portfolio } backwardLink={ backwardLink }>
			<PieceList pieces={ pieces } />
		</Page>
	)
}

export default CategoryPage