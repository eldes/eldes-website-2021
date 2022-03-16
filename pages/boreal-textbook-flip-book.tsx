import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import BeCredits from '../components/BeCredits'
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage'

const BorealTextbookFlipBookPage: NextPage = () => {
	return (
		<PieceBePage>
			<BeCredits
				clientName='Editora Boreal'
				work='storyboard and illustration'
			/>
		</PieceBePage>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', pieceBePageI18nNamespace)),
		}
	}
}

export default BorealTextbookFlipBookPage