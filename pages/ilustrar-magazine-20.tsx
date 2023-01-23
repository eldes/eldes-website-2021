import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetStaticProps, NextPage } from 'next/types';
import BeCredits from '../components/BeCredits';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagraph';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import Helpers from '../lib/Helpers';
import SeeMore from '../models/SeeMore';
import { TagSlug } from '../models/Tag';
import highlightImage from '../public/content/ilustrar-magazine-20/hightlight.png';
import illustration2Image from '../public/content/ilustrar-magazine-20/illustration-2.png';
import mockupImage from '../public/content/ilustrar-magazine-20/mockup.jpg';
import thanksImage from '../public/content/ilustrar-magazine-20/thanks.jpg';

const IlustrarMagazinePage: NextPage = () => {
	
  return (
    <PieceBePage seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
			TagSlug.WoodcutStyle,
		])}>
      <BeImage src={highlightImage} alt='1st illustration' />
      <BeCredits fields={[
				{
					label: 'Ilustrar Magazine',
					value: {
						br: 'cliente',
						en: 'client',
					}
				},
        {
					label: 'Renato Alarcão',
					value: {
						br: 'texto',
						en: 'text',
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
      <BeParagaph>
        <blockquote>Você tem ideia do tipo de ilustrador que quer ser?<br/>
        Faz ideia por onde começar?</blockquote>
      </BeParagaph>
      <BeImage src={illustration2Image} alt='2nd illustration' />
      <BeParagaph>
        A partir desses questionamentos, Alarcão faz uma reflexão sobre o ingresso na profissão de ilustrador e dá dicas valiosas para quem quer seguir nessa carreira.
      </BeParagaph>
       <BeParagaph>
        O artigo, <em>&quot;Sobre como dar Banho em Deuses&quot;</em>, escrito pelo Renato Alarcão e ilustrado por mim, foi publicado na edição 20 da Revista Ilustrar.
      </BeParagaph>
      <BeImage src={mockupImage} alt='Mockup' />
      <BeParagaph>
        Confira a edição, em <Link href="https://revistailustrar.com.br"><a target="_blank">www.revistailustrar.com.br</a></Link>
      </BeParagaph>
      <BeImage src={thanksImage} alt='Thank you' />
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

export default IlustrarMagazinePage;