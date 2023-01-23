import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import BeImage from '../components/BeImage';
import { beLicenseListI18n } from '../components/BeLicenseList';
import BePage from '../components/BePage';
import BeParagaph, { BeParagaphAlign } from '../components/BeParagraph';
import BePhotoGrid from '../components/BePhotoGrid';
import BeThanks from '../components/BeThanks';
import { fontBePageI18nKey, fontBePageI18nNamespace } from '../components/FontBePage';
import { PageSection } from '../components/Page';
import bookBackCoverArtCharacterscharactersImage from '../public/content/horror-font-eldes-cordel/book-back-cover-art-characters.jpeg';
import bookFrontCoverArtImage from '../public/content/horror-font-eldes-cordel/book-front-cover-art.jpg';
import bookMockupClosedImage from '../public/content/horror-font-eldes-cordel/book-mockup-closed.jpeg';
import bookMockupOpenImage from '../public/content/horror-font-eldes-cordel/book-mockup-open.jpeg';
import poster0Image from '../public/content/horror-font-eldes-cordel/poster-0.png';
import poster1Image from '../public/content/horror-font-eldes-cordel/poster-1.png';
import poster2Image from '../public/content/horror-font-eldes-cordel/poster-2.png';
import posterMovieForemanImage from '../public/content/horror-font-eldes-cordel/poster-movie-foreman.jpeg';
import posterMovieGingerImage from '../public/content/horror-font-eldes-cordel/poster-movie-ginger.jpeg';
import stageEngravingImage from '../public/content/horror-font-eldes-cordel/stage-engraving.jpg';
import stageGlyphsAppImage from '../public/content/horror-font-eldes-cordel/stage-glyphs-app.jpg';
import stagePencilImage from '../public/content/horror-font-eldes-cordel/stage-pencil.jpg';
import stageTracingImage from '../public/content/horror-font-eldes-cordel/stage-tracing.jpg';
import thanksImage from '../public/content/horror-font-eldes-cordel/thanks.jpg';
import titleImage from '../public/content/horror-font-eldes-cordel/title.png';

const HorrorFontEldesCordelPage: NextPage = function () {

	const { t: tp } = useTranslation(fontBePageI18nKey)

  const backwardLink = {
		text: `${tp('pretitle', 'Font Eldes')} Cordel`,
		href: '/font-eldes-cordel',
	}

  return (
    <BePage
      pretitle='Horror Font Eldes'
      title='Cordel'
      section={PageSection.Fonts}
      backgroundColor='#000'
      foregroundColor='#fff'
      backwardLink={backwardLink}
    >
      <BeImage src={bookFrontCoverArtImage} alt={'Illustration cover for a book mockup'} />
      <BeParagaph align={BeParagaphAlign.Center}>
        <span style={{textTransform: 'uppercase'}}>Introducing</span>
      </BeParagaph>
      <BeImage src={titleImage} alt={'Eldes Cordel'} />
      <BeParagaph align={BeParagaphAlign.Center}>
        <span style={{textTransform: 'uppercase', fontWeight: 400, fontSize: '2em', letterSpacing: '0.1em'}}>a horror font</span>
      </BeParagaph>
      <BeImage src={bookBackCoverArtCharacterscharactersImage} alt='Illustration with font characters' />
      <BeParagaph>
        Font inspired directly in the <em style={{color: '#f90', fontWeight: 400, fontStyle:'normal'}}>woodcut</em> — especially in the covers of the Cordel literature booklets — and originally created mainly to compose graphic pieces that have <em style={{color: '#f90', fontWeight: 400, fontStyle:'normal'}}>Brazilian culture</em> as reference and or that want to transmit the concept of <em style={{color: '#f90', fontWeight: 400, fontStyle:'normal'}}>handmade</em>, this type brings some of the visual characteristic of such printing technique, such as the gaps and inaccuracies of the notch in the wood matrix.
      </BeParagaph>
      <BeImage src={poster0Image} alt={'Poster demo'} verticalPadding horizontalPadding />
      <BePhotoGrid images={[
        {
          src: poster1Image,
          alt: 'Poster demo'
        },
        {
          src: poster2Image,
          alt: 'Poster demo'
        },
      ]} cols={2} />
      <BePhotoGrid images={[
        {
          src: stagePencilImage,
          alt: 'Pencil - Rough',
        },
        {
          src: stageEngravingImage,
          alt: 'Photoshop - Digital Engraving',
        },
        {
          src: stageTracingImage,
          alt: 'Illustrator - Image Tracing',
        },
        {
          src: stageGlyphsAppImage,
          alt: 'Glyphs App - Acurate, Kerning, Export OTF',
        },
      ]} cols={4} horizontalPadding />
      <BeParagaph>
        Because of your <em style={{color: '#f90', fontWeight: 400, fontStyle:'normal'}}>quirky</em> glyphs design, it&apos;s a suitable font for create a atmosphere of mystery in <em style={{color: '#f90', fontWeight: 400, fontStyle:'normal'}}>horror graphic pieces</em>.​​​​​​​
      </BeParagaph>
      <BePhotoGrid images={[
        {
          src: posterMovieGingerImage,
          alt: 'Use case: movie poster "The Ginger Bread House"',
        },
        {
          src: posterMovieForemanImage,
          alt: 'Use case: movie poster "Issue foreman"',
        },
      ]} cols={2} />
      <BeImage src={bookMockupClosedImage} alt='Use case: book cover "Knock on the wrong tree"' />
      <BeImage src={bookMockupOpenImage} alt='Use case: book cover "Knock on the wrong tree"' />
      <BeParagaph align={BeParagaphAlign.Center}>
        FULL VERSION of the font and for COMMERCIAL USE:<br/>
        <Link href='/font-eldes-cordel'><a style={{color: '#900', fontWeight: 700, fontSize: '1.7em'}}>AVAILABLE HERE</a></Link><br/>
        <Link href='/font-eldes-cordel'>www.eldes.com/font-eldes-cordel</Link>
      </BeParagaph>
      <BeThanks image={thanksImage} />
    </BePage>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', [...fontBePageI18nNamespace])),
		}
	}
}


export default HorrorFontEldesCordelPage;