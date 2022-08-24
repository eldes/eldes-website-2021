import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import BeCredits from '../components/BeCredits';
import BeEmbed from '../components/BeEmbed';
import BeHeading from '../components/BeHeading';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagaph';
import BePhotoGrid from '../components/BePhotoGrid';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import Helpers from '../lib/Helpers';
import SeeMore from '../models/SeeMore';
import { TagSlug } from '../models/Tag';
import highlightImage from '../public/content/whiteboard-animation-quale-magazine-elections/highlight.jpg';
import illustrationScene11Image from '../public/content/whiteboard-animation-quale-magazine-elections/illustration-scene-11.png';
import illustrationImage from '../public/content/whiteboard-animation-quale-magazine-elections/illustration.jpg';
import roughInfographicImage from '../public/content/whiteboard-animation-quale-magazine-elections/rough-infographic.jpg';
import rough01Image from '../public/content/whiteboard-animation-quale-magazine-elections/rough-scene-01.jpg';
import rough04Image from '../public/content/whiteboard-animation-quale-magazine-elections/rough-scene-04.jpg';
import rough07Image from '../public/content/whiteboard-animation-quale-magazine-elections/rough-scene-07.jpg';
import rough10aImage from '../public/content/whiteboard-animation-quale-magazine-elections/rough-scene-10a.jpg';
import rough11Image from '../public/content/whiteboard-animation-quale-magazine-elections/rough-scene-11.jpg';

const WhiteboardAnimationQualeExplicaEleicoes: NextPage = function () {

  const seeMoreList: SeeMore[] = [
		{
			title: {
				en: 'More whiteboard animation',
				br: 'Mais animação whiteboard',
			},
			slugs: ['protest-whiteboard-animation',],
		},
		{
			title: {
				en: 'See also flip books',
				br: 'Veja também flip books',
			},
			slugs: [
				'penguin-story-flip-book',
			],
		},
		{
			title: {
				en: 'More in cartoon style',
				br: 'Mais no estilo cartoon',
			},
			slugs: [
				'brasil-na-bagagem-textbook-illustrations',
				'baseball-guide',
			],
		},
  ];
  
  return (
    <PieceBePage
      seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
        TagSlug.Whiteboard,
        TagSlug.CartoonStyle,
      ])}
      backgroundColor='#000'
      foregroundColor='#fff'
    >
      <BeImage src={highlightImage} alt={'Details of illustation'} />
      <BeCredits fields={[
				{
					label: 'Revista Qualé',
					value: {
						br: 'conceito e texto',
						en: 'concept and text',
					}
				},
        {
					label: 'CriAudio Produções',
					value: {
						br: 'locução',
						en: 'voice ver',
					}
				},
				{
					label: 'Nathalia Spitaleti',
					value: {
						br: 'ilustração',
						en: 'illustration',
					}
				},
        {
					label: 'Eldes',
					value: {
						br: 'direção de arte e animação',
						en: 'art direction and animation',
					}
				},
			]}/>

      <BeParagaph>
        A Revista Qualé desejava criar um material especial sobre Eleições que pudesse ser usado como início da conversa sobre esse tema com as crianças e jovens, preparando eles para o exercício da cidadania.
      </BeParagaph>
      <BeParagaph>
        Assim, a partir do texto elaborado pela revista, criamos e produzimos, aqui no estúdio, um vídeo de animação whiteboard.
      </BeParagaph>

      <BeEmbed aspectRatioPercent={56.25} horizontalPadding={true} verticalPadding={true}>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/0gp1xh6U1og" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</BeEmbed>

      <BeParagaph>
      Nesse tipo de animação, as ilustrações vão sendo desenhadas de acordo com a locução e, juntas, formam um infográfico resumindo o texto.
      </BeParagaph>
      <BeImage src={illustrationImage} alt={'Illustration'} />

      <BeHeading>O processo</BeHeading>
      <BeParagaph>
        Com a versão final do texto em mãos, é gravada  locução e então elaborados os primeiros rascunhos para cada uma das cenas planejadas.
      </BeParagaph>
      <BeParagaph>
        Abaixo, alguns dos rascunhos elaborados pela Nathalia, ilustradora aqui do estúdio, nessa etapa do projeto:
      </BeParagaph>
      <BePhotoGrid images={[
        {
          src: rough01Image,
          alt: 'Rough of scene 1',
        },
        {
          src: rough04Image,
          alt: 'Rough of scene 4',
        },
        {
          src: rough07Image,
          alt: 'Rough of scene 7',
        },
        {
          src: rough10aImage,
          alt: 'Rough of scene 10 a',
        },
        {
          src: rough11Image,
          alt: 'Rough of scene 11',
        },
      ]} cols={3} />

      <BeParagaph>
        Aprovados os rascunhos das ilustrações individuais, é elaborado então o rascunho do infográfico, unindo todas as ilustrações e o texto:
      </BeParagaph>
      <BePhotoGrid images={[
        {
          src: roughInfographicImage,
          alt: 'Infographic',
        },
      ]} cols={1} />
      <BeParagaph>
        A partir desse rascunho é então elaborada uma animação simples (<em>animatic</em>) mostrando que parte do infográfico deve aparecer em qual tempo da locução.
      </BeParagaph>
      <BeParagaph>
        Aprovado o <em>animatic</em>, as ilustrações são arte-finalizadas e a animação produzida. 
      </BeParagaph>
      <BeImage src={illustrationScene11Image} alt='Final illustration of scene 11' />
      <BeThanks />
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

export default WhiteboardAnimationQualeExplicaEleicoes;