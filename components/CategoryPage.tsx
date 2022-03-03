import PieceList from '../components/PieceList'
import Page, { PageSection } from '../components/Page'
import { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import categoriesRepository from '../repositories/categories-repository'
import Piece from '../models/Piece'

const CategoryPage: FunctionComponent = () => {

	const { asPath } = useRouter()
	const slug = asPath.substring(1)

	const category = categoriesRepository.load(slug)
	const pieces: Piece[] = categoriesRepository.loadAllPieces(slug)

	const backwardLink = {
		text: 'Portfolio',
		href: '/portfolio',
	}

	return (
		<Page title={category?.title ?? ''} subtitle={category?.subtitle} section={ PageSection.Portfolio } backwardLink={ backwardLink }>
			<PieceList pieces={ pieces } />
		</Page>
	)
}

export default CategoryPage