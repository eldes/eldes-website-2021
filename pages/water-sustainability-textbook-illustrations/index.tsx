import { NextPage } from 'next';
import { useRouter } from 'next/router';
import BeCredits from '../../components/BeCredits';
import BeImage from '../../components/BeImage';
import BeThanks from '../../components/BeThanks';
import ContentBr from '../../components/pages/water-sustainability-textbook-illustrations/content-br';
import ContentEn from '../../components/pages/water-sustainability-textbook-illustrations/content-en';
import PieceBePage from '../../components/PieceBePage';
import SwitchLocale from '../../components/SwitchLocale';
import Helpers from '../../lib/Helpers';
import { TagSlug } from '../../models/Tag';
import headerImage from '../../public/content/water-sustainability-textbook-illustrations/header.jpg';
import thanksImage from '../../public/content/water-sustainability-textbook-illustrations/thanks.jpg';
import piecesRepository from '../../repositories/pieces-repository';

const TextbookAguaSustentabilidadePage: NextPage = function () {

  const router = useRouter();
  const slug = Helpers.getCurrentPageSlug(router);
  const piece = piecesRepository.load(slug);

  const colorSchema = {
    backgroundColor:'#fff',
    foregroundColor:'#000',
  };

  return (
    <PieceBePage seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
			TagSlug.Textbook,
			TagSlug.CartoonStyle,
		])} {...colorSchema}>
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
						br: 'ilustrações',
						en: 'illustrations',
					}
				},
			]} title={piece?.description}/>
      <SwitchLocale en={<ContentEn />} br={<ContentBr />} />
      <BeThanks image={thanksImage} />
    </PieceBePage>
  );
};


export default TextbookAguaSustentabilidadePage;