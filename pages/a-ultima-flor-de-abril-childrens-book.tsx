import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import BeCredits from '../components/BeCredits';
import BeHeading from '../components/BeHeading';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagraph';
import BePhotoGrid from '../components/BePhotoGrid';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import Helpers from '../lib/Helpers';
import SeeMore from '../models/SeeMore';
import { TagSlug } from '../models/Tag';
import coverIllustrationImage from '../public/content/a-ultima-flor-de-abril-childrens-book/cover-illustration.jpg';
import highlightIllustrationImage from '../public/content/a-ultima-flor-de-abril-childrens-book/ilustra-highlight.png';
import insideIllustration1Image from '../public/content/a-ultima-flor-de-abril-childrens-book/inside-illustration-1.png';
import insideIllustration2Image from '../public/content/a-ultima-flor-de-abril-childrens-book/inside-illustration-2.png';
import insideIllustration3Image from '../public/content/a-ultima-flor-de-abril-childrens-book/inside-illustration-3.png';
import insideIllustration4Image from '../public/content/a-ultima-flor-de-abril-childrens-book/inside-illustration-4.png';
import insideIllustration5Image from '../public/content/a-ultima-flor-de-abril-childrens-book/inside-illustration-5.png';
import insideIllustration6Image from '../public/content/a-ultima-flor-de-abril-childrens-book/inside-illustration-6.png';
import mockupImage from '../public/content/a-ultima-flor-de-abril-childrens-book/mockup.jpg';

const UltimaFlorAbrilPage: NextPage = () => {
  
  return (
    <PieceBePage seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
			TagSlug.CartoonStyle,
			TagSlug.Textbook,
		])}>
      <BeImage
				src={highlightIllustrationImage}
				alt={'Highlight illustration'}
			/>
      <BeCredits fields={[
				{
					label: 'Editora Saraiva',
					value: {
						br: 'editora',
						en: 'publisher',
					}
				},
        {
					label: 'Alexandre Azevedo e Augusto Segato',
					value: {
						br: 'texto',
						en: 'text',
					}
				},
				{
					label: 'Eldes',
					value: {
						br: 'ilustrações',
						en: 'illustrations',
					}
				},
			]}/>
      <BeImage
				src={mockupImage}
				alt={'Book cover mockup'}
			/>
      <BeParagaph>
        The book tells the story of the adventures of a group of friends who decide to investigate the mysterious disappearance of one of the neighbors in the neighborhood.
      </BeParagaph>
      <BeHeading>
        Inside the book
      </BeHeading>
      <BeParagaph>
        Black and white illustrations were prepared for the interior of the book, according to the briefing defined by the publisher.
      </BeParagaph>
      <BePhotoGrid images={[
        {
          src: insideIllustration1Image,
          alt: '',
        },
        {
          src: insideIllustration2Image,
          alt: '',
        },
        {
          src: insideIllustration3Image,
          alt: '',
        },
        {
          src: insideIllustration4Image,
          alt: '',
        },
        {
          src: insideIllustration5Image,
          alt: '',
        },
        {
          src: insideIllustration6Image,
          alt: '',
        },
      ]} cols={3} />
      <BeHeading>
        The cover
      </BeHeading>
      <BeParagaph>
        And a color illustration was designed to fill the entire front cover, back cover and flaps.
      </BeParagaph>
      <BeImage src={coverIllustrationImage} alt="cover illustration" />
    </PieceBePage>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', pieceBePageI18nNamespace )),
		}
	}
}

export default UltimaFlorAbrilPage;