import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { CSSProperties } from 'react';
import BeCredits from '../components/BeCredits';
import BeHeading from '../components/BeHeading';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagraph';
import BePhotoGrid from '../components/BePhotoGrid';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import Helpers from '../lib/Helpers';
import SeeMore from '../models/SeeMore';
import { TagSlug } from '../models/Tag';
import highlightImage from '../public/content/la-maison-qui-pue-magazine/highlight.png';
import ilustra1Image from '../public/content/la-maison-qui-pue-magazine/illustra-1.png';
import ilustra2Image from '../public/content/la-maison-qui-pue-magazine/illustra-2.png';
import sketchbook1Image from '../public/content/la-maison-qui-pue-magazine/sketchbook-1.jpg';
import sketchbook2Image from '../public/content/la-maison-qui-pue-magazine/sketchbook-2.jpg';
import sketchbook3Image from '../public/content/la-maison-qui-pue-magazine/sketchbook-3.jpg';
import sketchbook4Image from '../public/content/la-maison-qui-pue-magazine/sketchbook-4.jpg';
import thanksImage from '../public/content/la-maison-qui-pue-magazine/thanks.png';

const LaMaisonQuiPueMagazinePage = () => {

  return (
    <PieceBePage
      seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
        TagSlug.WoodcutStyle,
      ])}
      backgroundColor='#ea0f88'
      foregroundColor='#fff'
    >
      <BeImage src={highlightImage} alt={'Highlight of illustration'} />
      <BeCredits fields={[
        {
          label: 'La Maison Qui Pue',
          value: {
            en: 'publisher',
            br: 'editora',
          },
        },
        {
          label: 'Eldes',
          value: {
            en: 'illustrations',
            br: 'ilustrações',
          },
        },
      ]} />
      <BeParagaph>
        La Maison Qui Pue é uma publicação francesa de quadrinhos e ilustração, dirigida ao público adulto.
      </BeParagaph>
      <BeParagaph>
        Nessa quinta edição, os autores se esforçam para contar e ilustrar contos, com toda a liberdade de linguagem e expressão gráfica das demais edições, mas com o desafio de usar apenas duas cores.
      </BeParagaph>
      <BeParagaph>
        Fui convidado para participar dessa edição e elaborei uma série de ilustrações, sob o tema &quot;Reflexões sobre a Vida Moderna&quot;.
      </BeParagaph>
      <BeImage src={ilustra2Image} alt={'illustration'} />
      <BeImage src={ilustra1Image} alt={'illustration'} />
      <BeHeading backgroundColor='#91278f'>Sketches</BeHeading>
      <BeParagaph backgroundColor='#91278f'>
        A partir da ideia de cada ilustração, cada um dos elementos compondo as cenas foi desenhado individualmente, direto em nanquim sobre papel.
      </BeParagaph>
      <BePhotoGrid  backgroundColor='#91278f' images={[
        {
          src: sketchbook1Image,
          alt: 'sketche',
        },
      ]} cols={2} />
      <BePhotoGrid  backgroundColor='#91278f' images={[
        {
          src: sketchbook2Image,
          alt: 'sketche',
        },
        {
          src: sketchbook3Image,
          alt: 'sketche',
        },
        {
          src: sketchbook4Image,
          alt: 'sketche',
        },
      ]} cols={3} />
      <BeParagaph backgroundColor='#91278f'>
        Posteriormente, esses desenhos foram digitalizados e tratados para então montar a composição final de cada cena.
      </BeParagaph>
      <BeThanks  backgroundColor='#91278f' image={thanksImage} />
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

export default LaMaisonQuiPueMagazinePage;