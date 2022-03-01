import { GetStaticProps, NextPage } from 'next'
import CategoryList, { CategoriesListHighlight } from '../components/CategoryList'
import Page, { PageSection } from '../components/Page'
import Category from '../models/Category'
import categoriesRepository from '../repositories/categories-repository'

type Props = {
	categories: Category[]
}

const PortfolioPage: NextPage<Props> = ({ categories }) => {
	return (
		<Page title="Portfolio" section={ PageSection.Portfolio }>
			<CategoryList categories={ categories } highlight={ CategoriesListHighlight.High } />
		</Page>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {
			categories: categoriesRepository.loadAll()
		}
	}
}

export default PortfolioPage