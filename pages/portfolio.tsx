import { NextPage } from 'next'
import CategoryList from '../components/CategoryList'
import Page, { PageSection } from '../components/Page'

const PortfolioPage: NextPage = () => {
	return (
		<Page title="Portfolio" section={ PageSection.Portfolio }>
			<CategoryList />
		</Page>
	)
}

export default PortfolioPage