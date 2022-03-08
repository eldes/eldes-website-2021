import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import CategoryPage, { categoryPageI18nNamespace } from '../components/CategoryPage'

const ChildrensBooksAndTextbooksPage: NextPage = () => <CategoryPage />

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', categoryPageI18nNamespace)),
		}
	}
}

export default ChildrensBooksAndTextbooksPage