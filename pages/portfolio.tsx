import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CategoryList from '../components/CategoryList';
import Page, { pageI18nNamespace, PageSection } from '../components/Page';
import { CategoryHighlight } from '../models/CategoryHighlight';
import categoriesRepository from '../repositories/categories-repository';

const PortfolioPage: NextPage = () => {
	const categories = categoriesRepository.loadAll();
	const { t } = useTranslation()

	return (
		<Page title={ t('common:Sections.portfolio', 'Portfolio') } section={ PageSection.Portfolio }>
			<CategoryList categories={ categories.filter(category => (category.highlight === CategoryHighlight.High)) } />
			<CategoryList categories={ categories.filter(category => (category.highlight === CategoryHighlight.Medium)) } />
			<CategoryList categories={ categories.filter(category => (category.highlight === CategoryHighlight.Low)) } />
		</Page>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', [...pageI18nNamespace])),
		}
	}
}

export default PortfolioPage