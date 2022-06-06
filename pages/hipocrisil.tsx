import { NextPage } from 'next';
import BeCredits from '../components/BeCredits';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagaph';
import BePhotoGrid from '../components/BePhotoGrid';
import BeThanks from '../components/BeThanks';
import PieceBePage from '../components/PieceBePage';
import illustrationImage from '../public/content/hipocrisil/illustration.png';
import mockupImage from '../public/content/hipocrisil/mockup.jpg';
import sketchbook1Image from '../public/content/hipocrisil/sketchbook-1.jpg';
import sketchbook2Image from '../public/content/hipocrisil/sketchbook-2.jpg';

const HipocrisilPage: NextPage = () => {
  return (
    <PieceBePage>
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
      ]}>
        Esse trabalho fez parte da exposição IlustraBrasil!6, organizado pela SIB (Sociedade dos Ilustradores do Brasil).
      </BeCredits>
      <BeParagaph>
        O artigo &quot;Hipocrisil&quot; foi escrito pelo escritor Luciano Pires e publicado na seção de artigos semanais do seu blog &quot;Café Brasil&quot;.
      </BeParagaph>
      <BeImage src={mockupImage} alt="Mock-up" />
      <BeParagaph>
        Ilustrar alguns desses artigos semanais, durante dois anos, foi importante para definir meu método de desenvolvimento de ilustrações para periódicos — quando se conta com um tempo relativamente curto, entre receber o texto e elaborar a ilustração.
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

export default HipocrisilPage;