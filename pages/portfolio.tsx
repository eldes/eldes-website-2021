import { NextPage } from 'next'
import Link from 'next/link'
import CategoriesList from '../components/CategoriesList'
import Page, { PageSection } from '../components/Page'

const PortfolioPage: NextPage = () => {
	return (
		<Page title="Portfolio" section={ PageSection.Portfolio }>
			<CategoriesList />
		</Page>
	)
}

export default PortfolioPage