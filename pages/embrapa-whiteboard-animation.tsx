import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BeCredits from '../components/BeCredits';
import BeEmbed from '../components/BeEmbed';
import BeImage from '../components/BeImage';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import SeeMore from '../models/SeeMore';
import highlightImage from '../public/content/embrapa-whiteboard-animation/highlight.jpg';

const EmbrapaWhiteboardAnimationPage: NextPage = () => {
	const seeMoreList: SeeMore[] = [
		{
			title: {
				en: 'More whiteboard animation',
				br: 'Mais animação whiteboard',
			},
			slugs: ['protest-whiteboard-animation',],
		},
		{
			title: {
				en: 'See also flip books',
				br: 'Veja também flip books',
			},
			slugs: [
				'penguin-story-flip-book',
			],
		},
		{
			title: {
				en: 'More in cartoon style',
				br: 'Mais no estilo cartoon',
			},
			slugs: [
				'brasil-na-bagagem-textbook-illustrations',
				'baseball-guide',
			],
		},
	];

	return (
		<PieceBePage seeMoreList={seeMoreList}>
			<BeImage src={highlightImage} alt={'Details of illustation'} />
			<BeCredits fields={[
				{
					label: 'Embrapa',
					value: {
						br: 'cliente',
						en: 'client',
					}
				},
				{
					label: 'Eldes',
					value: {
						br: 'ilustração',
						en: 'illustration',
					}
				},
			]}/>
			<BeEmbed aspectRatioPercent={56.25} horizontalPadding={true} verticalPadding={true}>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/LnnnHaToJJE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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

export default EmbrapaWhiteboardAnimationPage