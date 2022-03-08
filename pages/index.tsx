import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Page, { PageSection } from '../components/Page'
import type { GetStaticProps, NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<Page title="Homepage" section={ PageSection.Home } />
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', ['common', 'Page'])),
		}
	}
}

export default Home