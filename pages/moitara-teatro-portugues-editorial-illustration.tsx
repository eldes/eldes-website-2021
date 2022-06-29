import { NextPage } from 'next';
import BeCredits from '../components/BeCredits';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagaph';
import BePhotoGrid from '../components/BePhotoGrid';
import BeThanks from '../components/BeThanks';
import PieceBePage from '../components/PieceBePage';
import SeeMore from '../models/SeeMore';
import illustrationImage from '../public/content/moitara-teatro-portugues-editorial-illustration/illustration.png';
import mockupSketchbook1Image from '../public/content/moitara-teatro-portugues-editorial-illustration/mockup-sketchbook-1.jpg';
import mockupSketchbook2Image from '../public/content/moitara-teatro-portugues-editorial-illustration/mockup-sketchbook-2.jpg';
import mockupImage from '../public/content/moitara-teatro-portugues-editorial-illustration/mockup.jpg';

const MoitaraTeatroPortuguesEditorialNewspaperPage: NextPage = function () {

  const seeMoreList: SeeMore[] = [
		{
			title: {
				en: 'More for editorial',
				br: 'Mais para editorial',
			},
			slugs: [
        'baseball-guide',
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
    <PieceBePage seeMoreList={seeMoreList}>
      <BeImage src={illustrationImage} alt={'Illustration'} />
      <BeCredits fields={[
        {
          label: 'A Folha',
          value: {
            br: 'jornal',
            en: 'newspaper'
          },
        },
        {
          label: 'Helvio Tamoio',
          value: {
            br: 'texto',
            en: 'text'
          },
        },
        {
          label: 'Eldes',
          value: {
            br: 'ilustração',
            en: 'illustration'
          },
        },
      ]}/>
      <BeParagaph>
        O artigo &quot;Teatro português em cena na cidade&quot; foi escrito pelo escritor Helvio Tamoio e publicado no caderno Moitará do jornal A Folha.
      </BeParagaph>
      <BeImage src={mockupImage} alt={'Mockup'} />
      <BeParagaph>
        O Moitará era o caderno de cultura do jornal, publicado semanalmente, para o qual, por mais de um ano, elaborei ilustrações de capa.
      </BeParagaph>
      <BePhotoGrid images={[
        {
          src: mockupSketchbook1Image,
          alt: 'Mockup of sketchbook',
        },
        {
          src: mockupSketchbook2Image,
          alt: 'Mockup of sketchbook',
        },
      ]} cols={2} />
      <BeThanks />
    </PieceBePage>
  );
};


export default MoitaraTeatroPortuguesEditorialNewspaperPage;