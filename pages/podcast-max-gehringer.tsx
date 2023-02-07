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
import illustration111213PenImage from '../public/content/podcast-max-gehringer/podcast-max-gehringer-illustration-111213-pen.jpg';
import illustration111221PenImage from '../public/content/podcast-max-gehringer/podcast-max-gehringer-illustration-111221-pen.jpg';
import illustration120102PenImage from '../public/content/podcast-max-gehringer/podcast-max-gehringer-illustration-120102-pen.jpg';
import illustration120102RoughImage from '../public/content/podcast-max-gehringer/podcast-max-gehringer-illustration-120102-rough.jpg';
import thanksImage from '../public/content/podcast-max-gehringer/thanks.jpg';
import BeImage from '../components/BeImage';
import BeThanks from '../components/BeThanks';
import BeParagaph from '../components/BeParagraph';
import animationImage from '../public/content/podcast-max-gehringer/podcast-max-gehringer-illustration-detail-animation.gif';
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
		>
      <BeImage src={animationImage} alt={'Animated illustration'}/>
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
            Inspired by the episodes, I developed a series of images as an exercise to create illustrations for periodicals in the Editorial market.
          </BeParagaph>
        </>
      } br={
        <>
          <BeParagaph>
            As an exercise, inspired by the podcast episodes, I developed a series of illustrations.
          </BeParagaph>
          <BeParagaph>
            Inspiradas nos episódios, desenvolvi uma série de imagens, como exercício de criação de ilustrações para periódicos do mercado editorial.
          </BeParagaph>
        </>
      } />

        
      <BeImage src={mockupImage} alt={'Laptop mockup showing the illustrations on a website.'} />

      <SwitchLocale en={
        <BeParagaph>
          Below are the illustrations for the episodes: <i>&quot;Os cinco maiores erros da carreira profissional&quot;</i> (&quot;The Five Biggest Mistakes in a Professional Career&quot;), <i>&quot;Como conviver com um colega negativista?&quot;</i> (&quot;How to Live With a Negative Colleague?&quot;) and <i>&quot;Como faço para escapar de uma lista de dispensa?&quot;</i> (&quot;How do I escape a waiver list?&quot;).
        </BeParagaph>
      } br={
        <BeParagaph>
          A seguir, as ilustrações para os episódios: &quot;Os cinco maiores erros da carreira profissional&quot;, &quot;Como conviver com um colega negativista?&quot; e &quot;Como faço para escapar de uma lista de dispensa?&quot;.
        </BeParagaph>
      } />

      <BeImage src={illustration111213Image} alt={'Illustration'} horizontalPadding verticalPadding />
      <BeImage src={illustration111221Image} alt={'Illustration'} horizontalPadding verticalPadding />
      <BeImage src={illustration120102Image} alt={'Illustration'} horizontalPadding verticalPadding />
      <SwitchLocale
        en={
          <>
            <BeHeading>
              Sketches and process:
            </BeHeading>
            <BeParagaph>
              Brain &gt; Pencil &gt; Pen and Ink &gt; Scanner &gt; Photoshop &gt; Illustrator:
            </BeParagaph>
          </>
        }
        br={
          <>
            <BeHeading>
              Rascunhos e processo:
            </BeHeading>
            <BeParagaph>
              Cérebro &gt; Lápis &gt; Caneta e Tinta &gt; Scanner &gt; Photoshop &gt; Illustrator:
            </BeParagaph>
          </>
        }
      />
      

      <BePhotoGrid images={[
        {
          src: illustration111213PenImage,
          alt: 'Pen and ink of illustration',
        },
        {
          src: illustration111221PenImage,
          alt: 'Pen and ink of illustration',
        },
        {
          src: illustration120102RoughImage,
          alt: 'Rough of illustration',
        },
        {
          src: illustration120102PenImage,
          alt: 'Pen and ink fo illustration',
        },
      ]} cols={2} />

      <BeThanks image={thanksImage} />
    </PieceBePage>
  );
};

export default PodcastMaxGehringerPage;