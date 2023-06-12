import { NextPage } from 'next';
import { useRouter } from 'next/router';
import BeCredits from '../../components/BeCredits';
import BeImage from '../../components/BeImage';
import BeThanks from '../../components/BeThanks';
import ContentBr from '../../components/pages/water-sustainability-textbook-cover-illustration/content-br';
import ContentEn from '../../components/pages/water-sustainability-textbook-cover-illustration/content-en';
import PieceBePage from '../../components/PieceBePage';
import SwitchLocale from '../../components/SwitchLocale';
import Helpers from '../../lib/Helpers';
import { TagSlug } from '../../models/Tag';
import headerImage from '../../public/content/water-sustainability-textbook-cover-illustration/header.png';
import thanksImage from '../../public/content/water-sustainability-textbook-cover-illustration/thanks.png';
import piecesRepository from '../../repositories/pieces-repository';

const TextbookAguaSustentabilidadePage: NextPage = function () {

  const router = useRouter();
  const slug = Helpers.getCurrentPageSlug(router);
  const piece = piecesRepository.load(slug);

  const blueColorSchema = {
    backgroundColor:'#1b76bc',
    foregroundColor:'#fff',
  };

  return (
    <PieceBePage seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
			TagSlug.Textbook,
			TagSlug.CartoonStyle,
		])} backgroundColor="#1b76bc" foregroundColor="#fff">
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
			]} title={piece?.description}/>
      <SwitchLocale en={<ContentEn />} br={<ContentBr />} />
      <BeThanks image={thanksImage} />
    </PieceBePage>
  );
};


export default TextbookAguaSustentabilidadePage;