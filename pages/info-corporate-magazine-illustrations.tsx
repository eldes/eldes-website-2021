import { NextPage } from 'next';
import { useRouter } from 'next/router';
import BeCredits from '../components/BeCredits';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagraph';
import BePhotoGrid from '../components/BePhotoGrid';
import BeThanks from '../components/BeThanks';
import PieceBePage from '../components/PieceBePage';
import SwitchLocale from '../components/SwitchLocale';
import Helpers from '../lib/Helpers';
import { TagSlug } from '../models/Tag';
import illustrationMailServerDown from '../public/content/info-corporate-magazine-illustrations/illustration-mail-server-down.jpg';
import illustrationImage from '../public/content/info-corporate-magazine-illustrations/illustration.png';
import mockupImage from '../public/content/info-corporate-magazine-illustrations/mockup.jpg';
import sketchbook1Image from '../public/content/info-corporate-magazine-illustrations/sketchbook-1.jpg';
import sketchbook2Image from '../public/content/info-corporate-magazine-illustrations/sketchbook-2.jpg';
import sketchbook3Image from '../public/content/info-corporate-magazine-illustrations/sketchbook-3.jpg';
import sketchbook4Image from '../public/content/info-corporate-magazine-illustrations/sketchbook-4.jpg';

const Page: NextPage = () => {
  return (
    <PieceBePage
      seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
        TagSlug.WoodcutStyle,
      ])}>
        <BeImage src={illustrationImage} alt={'Full illustration'} />
        <BeCredits fields={[
          {
            label: 'Editora Abril',
            value: {
              br: 'editora',
              en: 'publisher',
            }
          },
          {
            label: 'Vanina Batista',
            value: {
              br: 'direção de arte',
              en: 'art direction',
            }
          },
          {
            label: 'Eldes',
            value: {
              br: 'ilustração',
              en: 'illustration',
            }
          },
        ]}/>
        <SwitchLocale
          en={
            <BeParagaph>
              Illustrations for articles in issue 37 of INFO Corporate magazine, by Editora Abril, with topics on Information Technology in the corporate universe: e-mail servers, and digital inclusion program within the company.
            </BeParagaph>
          }
          br={
            <BeParagaph>
              Ilustrações para artigos da edição 37 da revista INFO Corporate, da Editora Abril, com temas sobre Tecnologia da Informação no universo corporativo: servidores de e-mail, e programa de inclusão digital dentro da empresa.
            </BeParagaph>
          }
        />
        <SwitchLocale
          en={
            <BeParagaph>
              The art direction needed each illustration to follow a different stroke style.
            </BeParagaph>
          }
          br={
            <BeParagaph>
              A direção de arte precisava que cada ilustração seguisse um estilo de traço diferente.
            </BeParagaph>
          }
        />
        <BePhotoGrid images={[
          {
            src: sketchbook1Image,
            alt: 'Sketchbook'
          },
          {
            src: sketchbook2Image,
            alt: 'Sketchbook'
          },
        ]} cols={2} />
        <BeImage src={mockupImage} alt={'Mockup of magazine'} />
        <BePhotoGrid images={[
          {
            src: sketchbook3Image,
            alt: 'Sketchbook'
          },
          {
            src: sketchbook4Image,
            alt: 'Sketchbook'
          },
        ]} cols={2} />
        <BeImage src={illustrationMailServerDown} alt={'Illustration for article about mail seerver down'} verticalPadding />
        <BeThanks />
      
    </PieceBePage>
  );
};

export default Page;