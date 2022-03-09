import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import FontPage, { fontPageI18nNamespace } from '../components/FontPage'

const FontEldesCordelPage: NextPage = () => <FontPage />

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', fontPageI18nNamespace)),
		}
	}
}

export default FontEldesCordelPage