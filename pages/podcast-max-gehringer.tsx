import { NextPage } from 'next';
import PieceBePage from '../components/PieceBePage';
import Helpers from '../lib/Helpers';
import { TagSlug } from '../models/Tag';
import BeCredits from '../components/BeCredits';
import { useRouter } from 'next/router';
import piecesRepository from '../repositories/pieces-repository';
import illustration111213Image from '../public/content/podcast-max-gehringer/podcast-max-gehringer-illustration-111213.jpg';
import illustration111221Image from '../public/content/podcast-max-gehringer/podcast-max-gehringer-illustration-111221.jpg';
import illustration120102Image from '../public/content/podcast-max-gehringer/podcast-max-gehringer-illustration-120102.jpg';
import mockupImage from '../public/content/podcast-max-gehringer/podcast-max-gehringer-mockup-illustrations.jpg';
import processTrainingImage from '../public/content/podcast-max-gehringer/eldes-illustration-editorial-process-training.gif';
import illustration111213PenImage from '../public/content/podcast-max-gehringer/podcast-max-gehringer-illustration-111213-pen.jpg';
import illustration111221PenImage from '../public/content/podcast-max-gehringer/podcast-max-gehringer-illustration-111221-pen.jpg';
import illustration120102PenImage from '../public/content/podcast-max-gehringer/podcast-max-gehringer-illustration-120102-pen.jpg';
import illustration120102RoughImage from '../public/content/podcast-max-gehringer/podcast-max-gehringer-illustration-120102-rough.jpg';
import processImage from '../public/content/podcast-max-gehringer/eldes-illustration-editorial-process.png';
import thanksImage from '../public/content/podcast-max-gehringer/thanks.png';
import BeImage from '../components/BeImage';
import BeThanks from '../components/BeThanks';
import BeParagaph from '../components/BeParagraph';
import detailTopImage from '../public/content/podcast-max-gehringer/podcast-max-gehringer-illustration-detail-top.jpg';
import detailBottomImage from '../public/content/podcast-max-gehringer/podcast-max-gehringer-illustration-detail-animation.gif';
import SwitchLocale from '../components/SwitchLocale';
import BeHeading from '../components/BeHeading';
import BePhotoGrid from '../components/BePhotoGrid';

const PodcastMaxGehringerPage: NextPage = () => {

  const router = useRouter();
  const slug = Helpers.getCurrentPageSlug(router);
  const piece = piecesRepository.load(slug);

  return (
		<PieceBePage
      seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
        TagSlug.WoodcutStyle,
      ])}
      backgroundColor='#edf24f'
		>

      <BeImage src={detailTopImage} alt={'Top detail of illustration'} />
      
			<BeCredits fields={[
				{
					label: 'Max Gehringer',
					value: {
						br: 'texto',
						en: 'text',
					}
				},
				{
					label: 'Eldes',
					value: {
						br: 'ilustrações',
						en: 'illustrations',
					}
				},
			]} title={piece?.description} />

      <SwitchLocale en={
        <>
          <BeParagaph>
            In the podcast <i>&quot;Carreira Profissional&quot;</i> (&quot;Professional Career&quot;), on Radio CBN, Max Gehringer offers valuable tips and guidance for those who want to invest in their career.
          </BeParagaph>
          <BeParagaph>
            Inspired by the episodes of this podcast, I developed a series of illustrations.
          </BeParagaph>
          <BeImage src={mockupImage} alt={'Digital mockup showing some of the illustrations being applied on the podcast website.'} />
          <BeParagaph backgroundColor='#fff'>
            This exercise helped to define my method of developing illustrations for periodicals — when there is a relatively short time between receiving the text and preparing the illustration.
          </BeParagaph>
          <BeImage src={processTrainingImage} alt={'Animação mostrando o processo de treinamento para ilustração para o mercado editorial'}  backgroundColor='#fff' />
          <BeParagaph  backgroundColor='#fff'>
          Below are the illustrations for the episodes: <i>&quot;Os cinco maiores erros da carreira profissional&quot;</i> (&quot;The Five Biggest Mistakes in a Professional Career&quot;), <i>&quot;Como conviver com um colega negativista?&quot;</i> (&quot;How to Live With a Negative Colleague?&quot;) and <i>&quot;Como faço para escapar de uma lista de dispensa?&quot;</i> (&quot;How do I escape a waiver list?&quot;).
        </BeParagaph>
        </>
      } br={
        <>
          <BeParagaph backgroundColor='#fff'>
            No podcast &quot;Carreira Profissional&quot;, da Rádio CBN, Max Gehringer dá dicas e orientações valiosas para quem quer investir na carreira. 
          </BeParagaph>
          <BeParagaph backgroundColor='#fff'>
            Inspiradas nos episódios desse podcast, desenvolvi uma série de ilustrações.
          </BeParagaph>
          <BeImage src={mockupImage} alt={'Maquete digital mostrando algumas das ilustrações sendo aplicadas no site do podcast.'} />
          <BeParagaph backgroundColor='#fff'>
            Esse exercício ajudou a definir meu método de desenvolvimento de ilustrações para periódicos — quando há um tempo relativamente curto entre o recebimento do texto e a preparação da ilustração.
          </BeParagaph>
          <BeImage src={processTrainingImage} alt={'Animation showing the process of illustration to editorial market'} backgroundColor='#fff'/>
          <BeParagaph backgroundColor='#fff'>
          A seguir, as ilustrações para os episódios: &quot;Os cinco maiores erros da carreira profissional&quot;, &quot;Como conviver com um colega negativista?&quot; e &quot;Como faço para escapar de uma lista de dispensa?&quot;.
        </BeParagaph>
        </>
      } />

      <BeImage src={illustration111213Image} alt={'Illustration'} horizontalPadding verticalPadding backgroundColor='#fff' />
      <BeImage src={illustration111221Image} alt={'Illustration'} horizontalPadding verticalPadding backgroundColor='#fff' />
      <BeImage src={illustration120102Image} alt={'Illustration'} horizontalPadding verticalPadding backgroundColor='#fff' />

      <SwitchLocale
        en={
          <BeHeading backgroundColor='#edf24f'>
            Sketches and process:
          </BeHeading>
        }
        br={
          <BeHeading backgroundColor='#edf24f'>
            Rascunhos e processo:
          </BeHeading>
        }
      />

      <BeImage src={processImage} alt={'Process: ideate and sketch, sktech, sktech..., ink, to digital, composition and adjusting on Photoshop, tracing and color on Illustrator'} horizontalPadding backgroundColor='#edf24f' />
      
      <BePhotoGrid images={[
        {
          src: illustration120102RoughImage,
          alt: 'Rough of illustration',
        },
        {
          src: illustration120102PenImage,
          alt: 'Pen and ink fo illustration',
        },
        {
          src: illustration111213PenImage,
          alt: 'Pen and ink of illustration',
        },
        {
          src: illustration111221PenImage,
          alt: 'Pen and ink of illustration',
        },
      ]} cols={2} />


      <BeThanks image={thanksImage} backgroundColor='#edf24f'/>
      <BeImage src={detailBottomImage} alt={'Animated illustration'}/>
    </PieceBePage>
  );
};

export default PodcastMaxGehringerPage;