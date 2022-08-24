import { NextPage } from 'next';
import { useRouter } from 'next/router';
import BeCredits from '../components/BeCredits';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagaph';
import BePhotoGrid from '../components/BePhotoGrid';
import BeThanks from '../components/BeThanks';
import PieceBePage from '../components/PieceBePage';
import Helpers from '../lib/Helpers';
import SeeMore from '../models/SeeMore';
import { TagSlug } from '../models/Tag';
import illustrationImage from '../public/content/solidao-empresarial-editorial-illustration/illustration.png';
import mockupImage from '../public/content/solidao-empresarial-editorial-illustration/mockup.jpg';
import sketchbook1Image from '../public/content/solidao-empresarial-editorial-illustration/sketchbook-1.jpg';
import sketchbook2Image from '../public/content/solidao-empresarial-editorial-illustration/sketchbook-2.jpg';

const SolidaoEmpresarialPage: NextPage = () => {
  
  return (
    <PieceBePage
      seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
        TagSlug.WoodcutStyle,
      ])}
    >
      <BeImage src={illustrationImage} alt={'Illustration'} />
      <BeCredits fields={[
        {
          label: 'Luciano Pires',
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
      ]} />
      <BeParagaph>
        O artigo &quot;Solidão empresarial&quot; foi escrito pelo escritor Luciano Pires e publicado na seção de artigos semanais do seu blog &quot;Café Brasil&quot;.
      </BeParagaph>
      <BeImage src={mockupImage} alt="Mock-up" />
      <BeParagaph>
        Ilustrar alguns desses artigos semanais, durante dois anos, foi importante para definir meu método de desenvolvimento de ilustrações para periódicos — quando se conta com um tempo relativamente curto entre receber o texto e elaborar a ilustração.
      </BeParagaph>
      <BePhotoGrid images={[
        {
          src: sketchbook1Image,
          alt: 'Sketch',
        },
        {
          src: sketchbook2Image,
          alt: 'Sketch',
        },
      ]} cols={2} />
      <BeThanks />
    </PieceBePage>
  );
};

export default SolidaoEmpresarialPage;