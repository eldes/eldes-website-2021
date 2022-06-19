import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BeCredits from '../components/BeCredits';
import BeImage from '../components/BeImage';
import BePhotoGrid from '../components/BePhotoGrid';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import SeeMore from '../models/SeeMore';
import highlightImage from '../public/content/boreal-textbook-flip-book/highlight.jpg';
import previewAniImage from '../public/content/boreal-textbook-flip-book/preview-ani.gif';

const BorealTextbookFlipBookPage: NextPage = () => {
	const seeMoreList: SeeMore[] = [
		{
			title: {
				en: 'More flip book',
				br: 'Mais flip book',
			},
			slugs: [
				'penguin-story-flip-book',
			],
		},
		{
			title: {
				en: 'See also whiteboard animation',
				br: 'Vja também animação whiteboard',
			},
			slugs: ['protest-whiteboard-animation',],
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
			<BeImage src={highlightImage} alt={'Details of illustration'} />
			<BeCredits fields={[
				{
					label: 'Editora Boreal',
					value: {
						br: 'editora',
						en: 'publisher',
					}
				},
				{
					label: 'Eldes',
					value: {
						br: 'storyboard e ilustração',
						en: 'storyboard and illustration',
					}
				},
			]}/>
			<BePhotoGrid
				images={[
					{
						src: previewAniImage,
						alt: 'Preview of animation'
					}
				]} cols={0} />
			<BeThanks />
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