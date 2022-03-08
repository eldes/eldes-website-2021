import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Page, { PageSection } from '../components/Page'

const AbaoutPage: NextPage = () => {
	const { t } = useTranslation()
	
	return (
		<Page title={ t('common:Sections.about', 'About') } section={PageSection.About}>
		</Page>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', ['common', 'Page'])),
		}
	}
}

export default AbaoutPage