import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CSSProperties } from 'react';
import BeCredits from '../components/BeCredits';
import BeHeading from '../components/BeHeading';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagaph';
import BePhotoGrid from '../components/BePhotoGrid';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import SeeMore from '../models/SeeMore';
import highlightImage from '../public/content/la-maison-qui-pue-magazine/highlight.png';
import ilustra1Image from '../public/content/la-maison-qui-pue-magazine/illustra-1.png';
import ilustra2Image from '../public/content/la-maison-qui-pue-magazine/illustra-2.png';
import sketchbook1Image from '../public/content/la-maison-qui-pue-magazine/sketchbook-1.jpg';
import sketchbook2Image from '../public/content/la-maison-qui-pue-magazine/sketchbook-2.jpg';
import sketchbook3Image from '../public/content/la-maison-qui-pue-magazine/sketchbook-3.jpg';
import sketchbook4Image from '../public/content/la-maison-qui-pue-magazine/sketchbook-4.jpg';
import thanksImage from '../public/content/la-maison-qui-pue-magazine/thanks.png';

const LaMaisonQuiPueMagazinePage = () => {
  const seeMoreList: SeeMore[] = [
		{
			title: {
				en: 'More for editorial',
				br: 'Mais para editorial',
			},
			slugs: [
        'solidao-empresarial-editorial-illustration',
      ],
		},
		{
			title: {
				en: 'More in woodcut style',
				br: 'Mais no estilo xilo',
			},
			slugs: [
        'como-eram-os-animais-cordel-childrens-book',
			],
		},
	];

  return (
    <PieceBePage seeMoreList={seeMoreList} backgroundColor='#ea0f88' foregroundColor='#fff'>
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
            br: 'ilustra????es',
          },
        },
      ]} />
      <BeParagaph>
        La Maison Qui Pue ?? uma publica????o francesa de quadrinhos e ilustra????o, dirigida ao p??blico adulto.
      </BeParagaph>
      <BeParagaph>
        Nessa quinta edi????o, os autores se esfor??am para contar e ilustrar contos, com toda a liberdade de linguagem e express??o gr??fica das demais edi????es, mas com o desafio de usar apenas duas cores.
      </BeParagaph>
      <BeParagaph>
        Fui convidado para participar dessa edi????o e elaborei uma s??rie de ilustra????es, sob o tema &quot;Reflex??es sobre a Vida Moderna&quot;.
      </BeParagaph>
      <BeImage src={ilustra2Image} alt={'illustration'} />
      <BeImage src={ilustra1Image} alt={'illustration'} />
      <BeHeading backgroundColor='#91278f'>Sketches</BeHeading>
      <BeParagaph backgroundColor='#91278f'>
        A partir da ideia de cada ilustra????o, cada um dos elementos compondo as cenas foi desenhado individualmente, direto em nanquim sobre papel.
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
        Posteriormente, esses desenhos foram digitalizados e tratados para ent??o montar a composi????o final de cada cena.
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