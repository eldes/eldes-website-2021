import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BeCredits from '../components/BeCredits';
import BeEmbed from '../components/BeEmbed';
import BeImage from '../components/BeImage';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import highlightImage from '../public/content/protest-whiteboard-animation/highlight.jpg';

const ProtestWhiteboardAnimationPage: NextPage = () => {

	return (
		<PieceBePage>
			<BeImage src={highlightImage} alt={'Detail of illutration'}></BeImage>
			<BeCredits fields={[
				{
					label: 'Agência Resulta',
					value: {
						br: 'cliente',
						en: 'client',
					}
				},
				{
					label: 'Eldes',
					value: {
						br: 'ilustrações e direção de arte',
						en: 'illustrations and art direction',
					}
				},
			]}/>
			<BeEmbed aspectRatioPercent={56.25} horizontalPadding={true} verticalPadding={true}>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/ArIjbvW1a7c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</BeEmbed>
			<BeThanks />
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

export default ProtestWhiteboardAnimationPage