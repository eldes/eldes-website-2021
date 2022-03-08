import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import BeBody from '../components/BeBody'
import BeCredits from '../components/BeCredits'
import PiecePage, { piecePageI18nNamespace } from '../components/PiecePage'

const BorealTextbookFlipBookPage: NextPage = () => {
	return (
		<PiecePage>
			<BeBody>
				<BeCredits
					clientName='Editora Boreal'
					work='storyboard and illustration'
				/>
			</BeBody>
		</PiecePage>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', piecePageI18nNamespace)),
		}
	}
}

export default BorealTextbookFlipBookPage