import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CategoryPage, { categoryPageI18nNamespace } from '../components/CategoryPage';
import ChildrensBooksAndTextbooksPage from './childrens-books-and-textbooks';

const EditorialPage: NextPage = () => <CategoryPage />

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', categoryPageI18nNamespace)),
		}
	}
}

export default EditorialPage;