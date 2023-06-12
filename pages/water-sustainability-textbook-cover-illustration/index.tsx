import { NextPage } from 'next';
import { useRouter } from 'next/router';
import BeCredits from '../../components/BeCredits';
import BeHeading from '../../components/BeHeading';
import BeImage from '../../components/BeImage';
import BeParagaph from '../../components/BeParagraph';
import BePhotoGrid from '../../components/BePhotoGrid';
import BeThanks from '../../components/BeThanks';
import PieceBePage from '../../components/PieceBePage';
import SwitchLocale from '../../components/SwitchLocale';
import Helpers from '../../lib/Helpers';
import { TagSlug } from '../../models/Tag';
import colorPalette2Image from '../../public/content/water-sustainability-textbook-cover-illustration/color-palette-2.png';
import colorPaletteImage from '../../public/content/water-sustainability-textbook-cover-illustration/color-palette.png';
import coverDesignRoughImage from '../../public/content/water-sustainability-textbook-cover-illustration/cover-design-rough.jpg';
import bookCoverMockupImage from '../../public/content/water-sustainability-textbook-cover-illustration/covers-mockup.jpg';
import headerImage from '../../public/content/water-sustainability-textbook-cover-illustration/header.png';
import illustrationRough from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-rough.jpg';
import illustrationVolume1Animals from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-1-animals.png';
import illustrationVolume1Canoe from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-1-canoe.png';
import illustrationVolume1Coocks from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-1-coocks.png';
import illustrationVolume1GirlsDrinking from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-1-girls-drinking.png';
import illustrationVolume1Ods from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-1-ods.png';
import illustrationVolume2Ac from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-2-ac.png';
import illustrationVolume2Composter from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-2-composter.png';
import illustrationVolume2Rain from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-2-rain.png';
import illustrationVolume2Teacher from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-2-teacher.png';
import illustrationVolume3Grab from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-3-crab.png';
import illustrationVolume3GirlAndBoy from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-3-girl-and-boy.png';
import illustrationVolume3RainWatchers from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-3-rain-watchers.png';
import illustrationVolume3WateringCan from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-3-watering-can.png';
import illustrationVolume4Fertilizing from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-4-fertilizing.png';
import illustrationVolume4Foz from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-4-foz.png';
import illustrationVolume4Meeting from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-4-meeting.png';
import illustrationVolume4Planting from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-4-planting.png';
import illustrationVolume4Recycle from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-4-recycle.png';
import logotypeArtworkImage from '../../public/content/water-sustainability-textbook-cover-illustration/logotype-artwork.png';
import logotypeRoughImage from '../../public/content/water-sustainability-textbook-cover-illustration/logotype-rough.jpg';
import thanksImage from '../../public/content/water-sustainability-textbook-cover-illustration/thanks.png';
import volume1CoverIllustrationRoughimage from '../../public/content/water-sustainability-textbook-cover-illustration/volume-1-cover-illustration-rough.jpg';
import volume1Cover from '../../public/content/water-sustainability-textbook-cover-illustration/volume-1-cover.png';
import volume2And3CoverIllustrationRoughimage from '../../public/content/water-sustainability-textbook-cover-illustration/volume-2-and-3-cover-illustration-rough.jpg';
import volume2Cover from '../../public/content/water-sustainability-textbook-cover-illustration/volume-2-cover.png';
import volume3Cover from '../../public/content/water-sustainability-textbook-cover-illustration/volume-3-cover.png';
import volume4CoverIllustrationRoughimage from '../../public/content/water-sustainability-textbook-cover-illustration/volume-4-cover-illustration-rough.jpg';
import volume4Cover from '../../public/content/water-sustainability-textbook-cover-illustration/volume-4-cover.png';
import piecesRepository from '../../repositories/pieces-repository';
import ContentBr from './content-br';
import ContentEn from './content-en';

const TextbookAguaSustentabilidadePage: NextPage = function () {

  const router = useRouter();
  const slug = Helpers.getCurrentPageSlug(router);
  const piece = piecesRepository.load(slug);

  const blueColorSchema = {
    backgroundColor:'#1b76bc',
    foregroundColor:'#fff',
  };

  const whiteColorSchema = {
    backgroundColor:'#fff',
    foregroundColor:'#000',
  };

  return (
    <PieceBePage seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
			TagSlug.Textbook,
			TagSlug.CartoonStyle,
		])} {...blueColorSchema}>
      <BeImage
				src={ headerImage }
				alt="Água e sustentabilidade"
			/>
      <BeCredits fields={[
				{
					label: 'COM-ARTE',
					value: {
						br: 'editora',
						en: 'publisher',
					}
				},
				{
					label: 'Eldes',
					value: {
						br: 'ilustrações e design de capa',
						en: 'book cover illustrations and design',
					}
				},
			]} {...blueColorSchema} title={piece?.description}/>
      <SwitchLocale en={ContentEn} br={ContentBr} />
      <BeThanks image={thanksImage} />
    </PieceBePage>
  );
};


export default TextbookAguaSustentabilidadePage;