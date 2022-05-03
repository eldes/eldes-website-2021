import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import Page, { PageSection } from '../components/Page'
import PieceList from '../components/PieceList'
import Piece from '../models/Piece'
import categoriesRepository from '../repositories/categories-repository'

export const categoryPageI18nNamespace = ['common', 'Page']

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