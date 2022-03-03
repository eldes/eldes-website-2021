import { NextPage } from 'next'
import { useRouter } from 'next/router'
import piecesRepository from '../repositories/pieces-repository'
import Page, { PageSection } from './Page'

type Props = {
	slug?: string
}

const PiecePage: NextPage<Props> = ({ slug, children }) => {

	const { asPath } = useRouter()
	const auto_slug = asPath.substring(1)

	const piece = piecesRepository.load(auto_slug)
	const categories = piecesRepository.loadAllCategories(auto_slug)
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