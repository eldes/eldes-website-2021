import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import BeBody from '../components/BeBody'
import BeCredits from '../components/BeCredits'
import PiecePage, { piecePageI18nNamespace } from '../components/PiecePage'

const ProtestWhiteboardAnimationPage: NextPage = () => {

	return (
		<PiecePage>
			<BeBody>
				<BeCredits clientName='Resulta' work='storyboard, illustration' />
			</BeBody>
		</PiecePage>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', piecePageI18nNamespace )),
		}
	}
}

export default ProtestWhiteboardAnimationPage