import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import BeCredits from '../components/BeCredits';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagraph';
import BePhotoGrid from '../components/BePhotoGrid';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import Helpers from '../lib/Helpers';
import SeeMore from '../models/SeeMore';
import { TagSlug } from '../models/Tag';
import highlightImage from '../public/content/boreal-textbook-flip-book/highlight.jpg';
import previewAniImage from '../public/content/boreal-textbook-flip-book/preview-ani.gif';

const BorealTextbookFlipBookPage: NextPage = () => {
	
	return (
		<PieceBePage
      seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
        TagSlug.Flipbook,
        TagSlug.CartoonStyle,
      ])}
		>
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