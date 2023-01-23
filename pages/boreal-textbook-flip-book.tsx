import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import BeCredits from '../components/BeCredits';
import BeHeading from '../components/BeHeading';
import BeImage from '../components/BeImage';
import BeParagaph, { BeParagaphAlign } from '../components/BeParagraph';
import BePhotoGrid from '../components/BePhotoGrid';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import Helpers from '../lib/Helpers';
import SeeMore from '../models/SeeMore';
import { TagSlug } from '../models/Tag';
import frame05Image from '../public/content/boreal-textbook-flip-book/flip-book--frame-05.jpg';
import frame31Image from '../public/content/boreal-textbook-flip-book/flip-book--frame-31.jpg';
import frame39Image from '../public/content/boreal-textbook-flip-book/flip-book--frame-39.jpg';
import frame55Image from '../public/content/boreal-textbook-flip-book/flip-book--frame-55.jpg';
import highlightImage from '../public/content/boreal-textbook-flip-book/highlight.jpg';
import previewAniImage from '../public/content/boreal-textbook-flip-book/preview-ani.gif';
import stoyboardImage from '../public/content/boreal-textbook-flip-book/storyboard.png';
import animationImage from '../public/content/boreal-textbook-flip-book/textbook--flip-book--animation-photoshop.jpg';
import storyboard1Image from '../public/content/boreal-textbook-flip-book/textbook--flip-book--study-1.jpg';
import storyboard2Image from '../public/content/boreal-textbook-flip-book/textbook--flip-book--study-2.jpg';
import storyboard3Image from '../public/content/boreal-textbook-flip-book/textbook--flip-book--study-3.jpg';
import storyboard4Image from '../public/content/boreal-textbook-flip-book/textbook--flip-book--study-4.jpg';
import textbookCover from '../public/content/boreal-textbook-flip-book/textbook-cover.jpg';
import inner414243Image from '../public/content/boreal-textbook-flip-book/textbook-inner-41-42-43.jpg';
import inner444546Image from '../public/content/boreal-textbook-flip-book/textbook-inner-44-45-46.jpg';
import thanksImage from '../public/content/boreal-textbook-flip-book/thanks.png';


const BorealTextbookFlipBookPage: NextPage = () => {

	const textStyles = {
		backgroundColor: '#8eb94d',
	};
	
	return (
		<PieceBePage
      seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
        TagSlug.Flipbook,
        TagSlug.CartoonStyle,
      ])} {...textStyles}
		>
			<BeImage src={highlightImage} alt={'Details of illustration'} />
			<BeCredits fields={[
				{
					label: 'Boreal Edições',
					value: {
						br: 'editora',
						en: 'publisher',
					}
				},
				{
					label: 'Eldes',
					value: {
						br: 'storyboard e ilustração',
						en: 'storyboard and illustration',
					}
				},
			]} title={{
				br: 'Flip book para livro didático da editora Boreal.',
				en: 'Flip book for textbook of the publisher Boreal.'
			}} >
				Publicação aprovada no PNLD 2023.
			</BeCredits>
			<BeParagaph>
				Os livros de práticas e acompanhamento da aprendizagem fazem parte da coleção Experimentar, Refletir e Comunicar, da editora <a href="https://borealedicoes.com.br/colecaoexperimentar.html" rel="noopener nofollow">Boreal</a>.
			</BeParagaph>
			<BeParagaph>
				Esses livros oferecem propostas didáticas para retomar aprendizagem e também sugestões de experimentação, jogos de tabuleiro, brincadeiras gráficas, pop-ups e outras abordagens lúdicas para atingir as expectativas da Base Nacional Comum Curricular (BNCC) para o 4º e 5º anos do ensino fundamental.
			</BeParagaph>
			<BeImage src={textbookCover} alt={'Textbook cover'} />
			<BeParagaph>
				Para o volume do componente Geografia, voltado ao 5º ano, a Boreal nos encomendou a elaboração de um flip book com a temática sobre o empobrecimento da vida social da rua causado pela intensificação do tráfego.
			</BeParagaph>
			<BeImage src={inner414243Image} alt={'Pages 41, 42 and 43'} />
			<BeImage src={inner444546Image} alt={'Pages 44, 45 and 46'} />
			
			<BeHeading backgroundColor='#000' foregroundColor='#8eb94d'>Animação final</BeHeading>
			<BeImage src={previewAniImage} alt={'Preview of animation'} verticalPadding horizontalPadding backgroundColor='#000' />
			<BeImage src={frame05Image} alt={'Details of illustration'} verticalPadding horizontalPadding backgroundColor='#000' />
			<BeImage src={frame31Image} alt={'Details of illustration'} verticalPadding horizontalPadding backgroundColor='#000' />
			<BeImage src={frame39Image} alt={'Details of illustration'} verticalPadding horizontalPadding backgroundColor='#000' />
			<BeImage src={frame55Image} alt={'Details of illustration'} verticalPadding horizontalPadding backgroundColor='#000' />
			
			<BeHeading backgroundColor='#be7eb6'>Storyboard e estudos</BeHeading>
			<BeImage src={stoyboardImage} alt={'Storyboard frames'} verticalPadding horizontalPadding backgroundColor='#be7eb6' />
			<BePhotoGrid images={[
				{
					src: storyboard1Image,
					alt: 'Study',
				},
				{
					src: storyboard2Image,
					alt: 'Study',
				},
				{
					src: storyboard3Image,
					alt: 'Study',
				},
				{
					src: storyboard4Image,
					alt: 'Study',
				},
			]} cols={2} backgroundColor='#be7eb6' />
			<BePhotoGrid images={[
				{
					src: animationImage,
					alt: 'Animação no Photoshop',
				},
			]} cols={1} backgroundColor='#be7eb6' />
			
			<BeThanks image={thanksImage} backgroundColor='#be7eb6' />
		</PieceBePage>
	)
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', pieceBePageI18nNamespace)),
		}
	}
};

export default BorealTextbookFlipBookPage;