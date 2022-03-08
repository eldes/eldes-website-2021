import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import BeBody from '../components/BeBody'
import BeCredits from '../components/BeCredits'
import PiecePage from '../components/PiecePage'

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
			...(await serverSideTranslations(locale ?? '', ['common', 'Page'])),
		}
	}
}

export default BorealTextbookFlipBookPage