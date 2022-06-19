import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BeCredits from '../components/BeCredits';
import BeImage from '../components/BeImage';
import BeParagaph, { BeParagaphAlign } from '../components/BeParagaph';
import BePhotoGrid from '../components/BePhotoGrid';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import SeeMore from '../models/SeeMore';
import coverImage from '../public/content/ajudaris-20-childrens-book-illustrations/cover.jpg';
import giraffeImage from '../public/content/ajudaris-20-childrens-book-illustrations/giraffe.jpg';
import animaisCacadorImage from '../public/content/ajudaris-20-childrens-book-illustrations/os-animais-e-o-cacador.jpg';
import roughImage from '../public/content/ajudaris-20-childrens-book-illustrations/rough.jpg';
import forestImage from '../public/content/ajudaris-20-childrens-book-illustrations/the-forest.jpg';


const HistoriasDaAjudaris20ChildrensBookIllustrationsPage: NextPage = () => {

	const seeMoreList: SeeMore[] = [
		{
			title: {
				en: 'More children\'s books',
				br: 'Mais livros infantis',
			},
			slugs: ['historias-da-ajudaris-17-childrens-book-illustrations',],
		},
		{
			title: {
				en: 'See also textbooks',
				br: 'Veja também livros didáticos',
			},
			slugs: ['brasil-na-bagagem-textbook-illustrations',],
		},
		{
			title: {
				en: 'More in cartoon style',
				br: 'Mais no estilo cartoon',
			},
			slugs: [
				'baseball-guide',
				'protest-whiteboard-animation',
			],
		},
	];

	return (
		<PieceBePage seeMoreList={seeMoreList}>
			<BeImage
				src={animaisCacadorImage}
				alt={'Illustration for "Os animais e o caçador"'}
			/>
			<BeCredits fields={[
				{
					label: 'Ajudaris',
					value: {
						br: 'editora',
						en: 'publisher',
					}
				},
				{
					label: 'Eldes',
					value: {
						br: 'ilustrações',
						en: 'illustrations',
					}
				},
			]}/>
			<BeParagaph>
				&quot;Histórias da Ajudaris&quot; (<em>&quot;Ajudaris&apos;s Stories&quot;</em>) is a collaborative book with multiple stories written by children from many public schools around Portugal.
			</BeParagaph>
			<BeImage
				src={coverImage}
				alt={'Digital mockup of book'}
			/>
			<BeParagaph>
			In this edition I illustrated 2 stories.
			</BeParagaph>
			<BeImage
				src={forestImage}
				alt={'Illustration for "A florestas"'}
				horizontalPadding={ true }
			/>
			<BePhotoGrid images={[
				{
					src: roughImage,
					alt: 'Rough'
				},
				{
					src: animaisCacadorImage,
					alt: 'Illustration for "Os animais e o caçador"	'
				},
			]} cols={2}>
				
			</BePhotoGrid>
			
			<BeThanks image={giraffeImage} />
		</PieceBePage>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', pieceBePageI18nNamespace )),
		}
	}
}

export default HistoriasDaAjudaris20ChildrensBookIllustrationsPage