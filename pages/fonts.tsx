import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import FontList from '../components/FontList'
import Page, { PageSection } from '../components/Page'
import Font from '../models/Font'
import fontsRepository from '../repositories/fonts-repository'

type Props = {
	fonts: Font[]
}

const FontsPage: NextPage<Props> = ({ fonts }) => {
	const { t } = useTranslation()
	
	return (
		<Page title={ t('common:Sections.fonts', 'Fonts') } section={PageSection.Fonts}>
			<FontList fonts={ fonts } />
		</Page>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			fonts: fontsRepository.loadAll(),
			...(await serverSideTranslations(locale ?? '', ['common', 'Page', 'fonts'])),
		}
	}
}

export default FontsPage