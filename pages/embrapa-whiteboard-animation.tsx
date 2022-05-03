import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import BeCredits from '../components/BeCredits'
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage'

const EmbrapaWhiteboardAnimationPage: NextPage = () => {

	return (
		<PieceBePage>
			<BeCredits clientName='Embrapa' work='illustration' />
		</PieceBePage>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', pieceBePageI18nNamespace )),
		}
	}
}

export default EmbrapaWhiteboardAnimationPage