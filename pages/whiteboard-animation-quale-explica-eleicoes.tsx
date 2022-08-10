import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BeCredits from '../components/BeCredits';
import BeEmbed from '../components/BeEmbed';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagaph';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import SeeMore from '../models/SeeMore';
import highlightImage from '../public/content/whiteboard-animation-quale-explica-eleicoes/highlight.jpg';
import illustrationImage from '../public/content/whiteboard-animation-quale-explica-eleicoes/illustration.jpg';

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
    <PieceBePage seeMoreList={seeMoreList} backgroundColor='#000' foregroundColor='#fff'>
      <BeImage src={highlightImage} alt={'Details of illustation'} />
      <BeCredits fields={[
				{
					label: 'Qualé',
					value: {
						br: 'conceito e texto',
						en: 'concept and text',
					}
				},
        {
					label: 'CriAudio',
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
        A Revista Qualé desejava criar um material especial sobre Eleições, que poderia ser usado como início da conversa sobre o tema com as crianças e jovens, os preparando para o exercício da cidadania.
      </BeParagaph>
      <BeParagaph>
        Assim, a partir do texto eleborado pela revista, criamos e produzimos um vídeo de animação whiteboard.
      </BeParagaph>

      <BeEmbed aspectRatioPercent={56.25} horizontalPadding={true} verticalPadding={true}>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/0gp1xh6U1og" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</BeEmbed>

      <BeParagaph>
        Nesse tipo de animação, as ilustrações vão sendo desenhadas de acordo com a locução e, juntas, devem formar um infográfico resumindo o texto do áudio.
      </BeParagaph>
      <BeImage src={illustrationImage} alt={'Illustration'} />
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