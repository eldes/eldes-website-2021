import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import CategoryList, { CategoriesListHighlight } from '../components/CategoryList'
import Page, { PageSection } from '../components/Page'
import Category from '../models/Category'
import categoriesRepository from '../repositories/categories-repository'

type Props = {
	categories: Category[]
}

const PortfolioPage: NextPage<Props> = ({ categories }) => {
	const { t } = useTranslation()

	return (
		<Page title={ t('common:Sections.portfolio', 'Portfolio') } section={ PageSection.Portfolio }>
			<CategoryList categories={ categories } highlight={ CategoriesListHighlight.High } />
		</Page>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', ['common', 'Page'])),
			categories: categoriesRepository.loadAll(),
		}
	}
}

export default PortfolioPage