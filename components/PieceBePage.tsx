import { NextPage } from 'next'
import { useRouter } from 'next/router'
import piecesRepository from '../repositories/pieces-repository'
import BePage, { bePageI18nNamespace, BePageProps } from './BePage'
import { PageSection } from './Page'

type Props = {
	// BePage
	backgroundColor?: string
	foregroundColor?: string
}

const PieceBePage: NextPage<Props> = (props) => {

	const { asPath } = useRouter()
	const slug = asPath.substring(1).split('#')[0]

	const piece = piecesRepository.load(slug)
	const categories = piecesRepository.loadAllCategories(slug)
	const firstCategory = categories[0]

	const backwardLink = {
		text: `${firstCategory?.title} ${firstCategory?.subtitle}`,
		href: `/${firstCategory?.slug}`,	
	}

	return (
		<BePage
			title={piece?.title ?? ''}
			subtitle={piece?.subtitle}
			section={ PageSection.Portfolio }
			backwardLink={ backwardLink }
			backgroundColor={ props.backgroundColor }
			foregroundColor={ props.foregroundColor }
		>
			{ props.children }
		</BePage>
	)
}

export default PieceBePage
export const pieceBePageI18nNamespace = [... bePageI18nNamespace, 'PieceBePage']