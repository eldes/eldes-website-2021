import { NextPage } from 'next'
import { useRouter } from 'next/router'
import piecesRepository from '../repositories/pieces-repository'
import Page, { PageSection } from './Page'

export const PiecePageI18nNamespace = ['common', 'Page', 'PiecePage']

const PiecePage: NextPage = ({ children }) => {

	const { asPath } = useRouter()
	const slug = asPath.substring(1)

	const piece = piecesRepository.load(slug)
	const categories = piecesRepository.loadAllCategories(slug)
	const firstCategory = categories[0]

	const backwardLink = {
		text: `${firstCategory?.title} ${firstCategory?.subtitle}`,
		href: `/${firstCategory?.slug}`,	
	}

	return (
		<Page title={piece?.title ?? ''} subtitle={piece?.subtitle} section={ PageSection.Portfolio } backwardLink={ backwardLink }>
			{ children }
		</Page>
	)
}

export default PiecePage