import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import BeCredits from '../components/BeCredits';
import BeHeading from '../components/BeHeading';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagaph';
import BePhotoGrid from '../components/BePhotoGrid';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import SwitchLocale from '../components/SwitchLocale';
import Helpers from '../lib/Helpers';
import SeeMore from '../models/SeeMore';
import { TagSlug } from '../models/Tag';
import aniHittingImage from '../public/content/baseball-guide/ani-hitting.gif';
import aniPitchingImage from '../public/content/baseball-guide/ani-pitching.gif';
import bottleBatImage from '../public/content/baseball-guide/bottle-bat.png';
import catcherImage from '../public/content/baseball-guide/catcher.png';
import catchingImage from '../public/content/baseball-guide/catching.png';
import equipmentsBallImage from '../public/content/baseball-guide/equipments-ball.png';
import equipmentsBatImage from '../public/content/baseball-guide/equipments-bat.png';
import equipmentsGloveImage from '../public/content/baseball-guide/equipments-glove.png';
import evaPlateImage from '../public/content/baseball-guide/eva-plate.png';
import footballGlovesImage from '../public/content/baseball-guide/football-gloves.png';
import gardner1Image from '../public/content/baseball-guide/gardner-1.png';
import gardner2Image from '../public/content/baseball-guide/gardner-2.png';
import headerBrImage from '../public/content/baseball-guide/header-br.png';
import headerImage from '../public/content/baseball-guide/header.png';
import hitter1Image from '../public/content/baseball-guide/hitter-1.png';
import hitter2Image from '../public/content/baseball-guide/hitter-2.png';
import hittingImage from '../public/content/baseball-guide/hitting.png';
import mockupCoverAlternative1Image from '../public/content/baseball-guide/mockup-cover-alternative-1.jpg';
import mockupCoverAlternative2Image from '../public/content/baseball-guide/mockup-cover-alternative-2.jpg';
import mockupCoverFinalImage from '../public/content/baseball-guide/mockup-cover-final.jpg';
import mockupPages02And03Image from '../public/content/baseball-guide/mockup-pages-02-03.jpg';
import mockupPages04And05Image from '../public/content/baseball-guide/mockup-pages-04-05.jpg';
import mockupPages06And07Image from '../public/content/baseball-guide/mockup-pages-06-07.jpg';
import mockupPages08And09Image from '../public/content/baseball-guide/mockup-pages-08-09.jpg';
import mockupPages10And11Image from '../public/content/baseball-guide/mockup-pages-10-11.jpg';
import mockupPages12And13Image from '../public/content/baseball-guide/mockup-pages-12-13.jpg';
import mockupPages14And15Image from '../public/content/baseball-guide/mockup-pages-14-15.jpg';
import mockupPages16And17Image from '../public/content/baseball-guide/mockup-pages-16-17.jpg';
import mockupPages18And19Image from '../public/content/baseball-guide/mockup-pages-18-19.jpg';
import mockupImage from '../public/content/baseball-guide/mockup.jpg';
import pitcherImage from '../public/content/baseball-guide/pitcher.png';
import pithcingGripImage from '../public/content/baseball-guide/pitching-grip.png';
import pitchingImage from '../public/content/baseball-guide/pitching.png';
import sockBallImage from '../public/content/baseball-guide/sock-ball.png';
import thanksImage from '../public/content/baseball-guide/thanks.png';

const BaseballGuidePage: NextPage = () => {

  return (
    <PieceBePage
      seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
        TagSlug.CartoonStyle,
      ])}
    >
      <SwitchLocale
        en={<BeImage src={headerImage} alt="Baseball Guide" />}
        br={<BeImage src={headerBrImage} alt="Beisebol - Guia" />}
      />
      
      <BeCredits
        backgroundColor='#33a3dc'
        foregroundColor='#fff'
        fields={[
          {
            label: 'SESC',
            value: {
              en: 'client',
              br: 'cliente',
            }
          },
          {
            label: 'Eldes',
            value: {
              en: 'design and illustrations',
              br: 'design e ilustrações',
            }
          },
        ]}
      />
      <SwitchLocale
        en={
          <BeParagaph backgroundColor='#33a3dc' foregroundColor='#fff'>
            Thinking how baseball is not so well known in Brazil, SESC (<em>Social Service of Commerce</em>) created a booklet to introduce this sport to Physical Education professionals, schoolchildren and the general population.
          </BeParagaph>
        }
        br={
          <BeParagaph backgroundColor='#33a3dc' foregroundColor='#fff'>
            Pensando que o beisebol não é tão conhecido no Brasil, o SESC criou uma cartilha para apresentar esse esporte aos profissionais de Educação Física, aos escolares e à população em geral.
          </BeParagaph>
        }
      />
      
      
      <BeImage src={mockupImage} alt="Mockup showing cover" />
      <BePhotoGrid images={[
        {
          src: pitcherImage,
          alt: 'Illustration of pitcher',
        },
        {
          src: hitter1Image,
          alt: 'Illustration of hitter',
        },
        {
          src: gardner1Image,
          alt: 'Illustration of gardner',
        },
      ]} cols={3} />

      <SwitchLocale
        en={
          <BeParagaph>
            To make the explanation of rules and practices more accessible and enjoyable, I chose to develop a graphic project with a helpful use of illustrations and following a visual language such as sports almanacs.
          </BeParagaph>
        }
        br={
          <BeParagaph>
            Para deixar a explicação, sobre regras e prática, mais acessível e agradável, optei por elaborar um projeto gráfico com bom uso de ilustrações e seguindo uma linguagem visual como dos almanaques de esporte.
          </BeParagaph>
        }
      />
      
      <BeImage src={mockupPages02And03Image} alt="Mockup show pages 2 and 3 (Scheduling and introduction for Semana MOVE)" />
      <BeImage src={mockupPages04And05Image} alt="Mockup show pages 4 and 5 (Guide goal, history of baseball at Brazil, Introduction to baseball)" />

      <BePhotoGrid images={[
        {
          src: gardner2Image,
          alt: 'Illustration of gardner',
        },
        {
          src: hitter2Image,
          alt: 'Illustration of hitter',
        },
        {
          src: catcherImage,
          alt: 'Illustration of catcher',
        },
      ]} cols={3} />

      <BePhotoGrid images={[
        {
          src: equipmentsBallImage,
          alt: 'Illustration of equipments: ball',
        },
        {
          src: equipmentsBatImage,
          alt: 'Illustration of equipments: bat',
        },
        {
          src: equipmentsGloveImage,
          alt: 'Illustration of equipments: glove',
        },
      ]} cols={3} />

      <BeImage src={mockupPages06And07Image} alt="Mockup" />
      <BeImage src={mockupPages08And09Image} alt="Mockup show pages 8 and 9 (Defense, strike e hitting)" />
      <BeImage src={mockupPages10And11Image} alt="Mockup show pages 10 and 11 (Score, equipament, fundamentals and pitching)" />

      <BeImage src={pithcingGripImage} alt="Illustration of pitching grip" />
      <BeImage src={pitchingImage} alt="Illustration of pitching fundamentals" />
      <BePhotoGrid backgroundColor='#faa634' images={[
        {
          src: aniPitchingImage,
          alt: 'Animation of pitching',
        },
        {
          src: aniHittingImage,
          alt: 'Animation of hitting',
        },
      ]} cols={2} />
      <BeImage src={hittingImage} alt="Illustration of hitting fundamentals" />
      <BeImage src={mockupPages12And13Image} alt="Mockup show pages 12 and 13 (Fundamentals about hitting and pitching)" />

      <BeImage src={catchingImage} alt="Illustration of catching fundamentals" />
      <BeImage src={mockupPages14And15Image} alt="Mockup show pages 14 and 15 (Fundamentals about catching, and games to learning baseball)" />

      <BePhotoGrid images={[
        {
          src: evaPlateImage,
          alt: 'Illustration of EVA plate',
        },
        {
          src: sockBallImage,
          alt: 'Illustration of sock ball',
        },
        {
          src: bottleBatImage,
          alt: 'Illustration of plastic bottle bat',
        },
        {
          src: footballGlovesImage,
          alt: 'Illustration of football gloves',
        },
      ]} cols={2} />
      <BeImage src={mockupPages16And17Image} alt="Mockup show pages 16 and 17 (Games to learning baseball and adaptation alternatives of equipments for School)" />
      <BeImage src={mockupPages18And19Image} alt="Mockup show pages 18 and 19 (References, curiosities and glossary)" />

      <SwitchLocale
        en={
          <>
            <BeHeading>Cover</BeHeading>
            <BeParagaph>
              Contrary to what usually happens, in this guide we chose to define the cover before designing the interior of the publication.
            </BeParagaph>
            <BeParagaph>
              The reason was that the cover serves as a visual identity for the SESC project as a whole.
            </BeParagaph>
            <BeParagaph>
              Following are some of the variations elaborated until reaching the final version:
            </BeParagaph>
          </>
        }
        br={
          <>
            <BeHeading>Capa</BeHeading>
            <BeParagaph>
              Ao contrário do que normalmente acontece, nesse guia optamos por definir a capa antes do design do interior da publicação.
            </BeParagaph>
            <BeParagaph>
              O motivo foi a capa servir como uma Identidade Visual do projeto do SESC, como um todo.
            </BeParagaph>
            <BeParagaph>
              A seguir, algumas das variações elaboradas até se chegar na versão final:
            </BeParagaph>
          </>
        }
      />
      
      
      <BePhotoGrid images={[
        {
          src: mockupCoverAlternative1Image,
          alt: 'Mockup of alternative cover'
        },
        {
          src: mockupCoverAlternative2Image,
          alt: 'Mockup of alternative cover'
        },
        {
          src: mockupCoverFinalImage,
          alt: 'Mockup of final cover'
        },
      ]} cols={3}/>
      
      <BeImage src={thanksImage} alt="Illustration of baseball ball" />
      <BeThanks backgroundColor='#33a3dc' foregroundColor='#fff' />
    </PieceBePage>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', [...pieceBePageI18nNamespace])),
		}
	}
}

export default BaseballGuidePage;