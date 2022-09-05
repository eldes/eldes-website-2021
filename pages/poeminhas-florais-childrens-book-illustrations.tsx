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
import artworkPart1Image from '../public/content/poeminhas-florais-childrens-book-illustrations/artwork-part-1.jpg';
import artworkPart2Image from '../public/content/poeminhas-florais-childrens-book-illustrations/artwork-part-2.jpg';
import artworkPart3Image from '../public/content/poeminhas-florais-childrens-book-illustrations/artwork-part-3.jpg';
import artworkPart4Image from '../public/content/poeminhas-florais-childrens-book-illustrations/artwork-part-4.jpg';
import artworkPart5Image from '../public/content/poeminhas-florais-childrens-book-illustrations/artwork-part-5.jpg';
import artworkPart6Image from '../public/content/poeminhas-florais-childrens-book-illustrations/artwork-part-6.jpg';
import artworkPart7Image from '../public/content/poeminhas-florais-childrens-book-illustrations/artwork-part-7.jpg';
import coverClosedImage from '../public/content/poeminhas-florais-childrens-book-illustrations/cover-closed.jpg';
import coverPoeminhasCelestiais from '../public/content/poeminhas-florais-childrens-book-illustrations/cover-poeminhas-celestiais.jpg';
import coverPoeminhasFlorais from '../public/content/poeminhas-florais-childrens-book-illustrations/cover-poeminhas-florais.jpg';
import coverPoeminhasLegais from '../public/content/poeminhas-florais-childrens-book-illustrations/cover-poeminhas-legais.jpg';
import coverPoeminhasProfissionais from '../public/content/poeminhas-florais-childrens-book-illustrations/cover-poeminhas-profissionais.jpg';
import coverPoeminhasReais from '../public/content/poeminhas-florais-childrens-book-illustrations/cover-poeminhas-reais.jpg';
import coverPoeminhasVegetais from '../public/content/poeminhas-florais-childrens-book-illustrations/cover-poeminhas-vegetais.jpg';
import hummingbirdImage from '../public/content/poeminhas-florais-childrens-book-illustrations/hummingbird.jpg';
import marcaCorujinhaImage from '../public/content/poeminhas-florais-childrens-book-illustrations/marca-corujinha-editora.png';
import mockup01FrontImage from '../public/content/poeminhas-florais-childrens-book-illustrations/mockup-01-front.jpg';
import mockup02DedicationImage from '../public/content/poeminhas-florais-childrens-book-illustrations/mockup-02-dedication.jpg';
import mockup03KisserImage from '../public/content/poeminhas-florais-childrens-book-illustrations/mockup-03-kisser.jpg';
import mockupCoverBackImage from '../public/content/poeminhas-florais-childrens-book-illustrations/mockup-cover-back.jpg';
import mockupPages0001Image from '../public/content/poeminhas-florais-childrens-book-illustrations/mockup-pages-00-01.jpg';
import mockupPages0203Image from '../public/content/poeminhas-florais-childrens-book-illustrations/mockup-pages-02-03.jpg';
import mockupPages0405Image from '../public/content/poeminhas-florais-childrens-book-illustrations/mockup-pages-04-05.jpg';
import mockupPages0607Image from '../public/content/poeminhas-florais-childrens-book-illustrations/mockup-pages-06-07.jpg';
import mockupPages0809Image from '../public/content/poeminhas-florais-childrens-book-illustrations/mockup-pages-08-09.jpg';
import mockupPages1011Image from '../public/content/poeminhas-florais-childrens-book-illustrations/mockup-pages-10-11.jpg';
import mockupPages1213Image from '../public/content/poeminhas-florais-childrens-book-illustrations/mockup-pages-12-13.jpg';
import mockupPages1415Image from '../public/content/poeminhas-florais-childrens-book-illustrations/mockup-pages-14-15.jpg';
import mockupPages1617Image from '../public/content/poeminhas-florais-childrens-book-illustrations/mockup-pages-16-17.jpg';
import mockupPages1819Image from '../public/content/poeminhas-florais-childrens-book-illustrations/mockup-pages-18-19.jpg';
import thanksImage from '../public/content/poeminhas-florais-childrens-book-illustrations/thanks.jpg';



const PoeminhasReaisChildrensBookIllustrationsPage: NextPage = () => {

	return (
		<PieceBePage seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
			TagSlug.CartoonStyle,
			TagSlug.Textbook,
		])}>
			<BeImage
				src={ hummingbirdImage }
				alt={'Illustration of the "kisser"'}
				
			/>
			<BeCredits fields={[
				{
					label: 'Editora Coruja',
					value: {
						br: 'editora',
						en: 'publisher',
					}
				},
				{
					label: 'Eldes',
					value: {
						br: 'ilustrações, projeto gráfico e identidade visual',
						en: 'illustrations, book design and identity',
					}
				},
				
			]}/>
			<BeImage
				src={ coverClosedImage }
				alt={'Mockup of closed cover'}
			/>
			<BeParagaph>
				Margarida, angélica, maria-sem-vergonha, hortênsia, bela-emília, ciclame, celósia, rosa, amor-perfeito, lanterna-japonesa, girassol... Ufa! Será um dicionário botânico, festa de Holambra ou a lista das plantas dos jardins suspensos da Babilônia? Nada disso! São alguns convidados de honra do Alexandre e do Eldes para os poeminhas florais.
			</BeParagaph>
			<BeParagaph>
				Poeminhas Florais é um livro infantil que brinca com os nomes de diversas flores.
			</BeParagaph>
			<BeHeading>Arte-final</BeHeading>
			<BeParagaph>
				O beija-flor, a Rosa, a Érica, a Angélica e a Violeta:
			</BeParagaph>
			<BeImage src={artworkPart1Image} alt={'Fullspread artwork'} />
			<BeParagaph>
				A Celósia, o Delfínio, a Bromélia, o Hibisco, o Cliclame, o Copo-de-leite, a Camélia, a Lágrima-de-Cristo, o My Pink, o Chinelinho-de-madame e a Maria-sem-vergonha:
			</BeParagaph>
			<BeImage src={artworkPart2Image} alt={'Fullspread artwork'} />
			<BeParagaph>
				A Bela-Emília e a Margarida:
			</BeParagaph>
			<BeImage src={artworkPart3Image} alt={'Fullspread artwork'} />
			<BeParagaph>
				O Amor-perfeito e o Girassol:
			</BeParagaph>
			<BeImage src={artworkPart4Image} alt={'Fullspread artwork'} />
			<BeParagaph>
				A Flor-de-Santo-Antônio, o Jasmim, a Azaléia, a Dália-de-jardim, a Moreia, a Lanterna-japonesa e o Brinco-de-princesa:
			</BeParagaph>
			<BeImage src={artworkPart5Image} alt={'Fullspread artwork'} />
			<BeParagaph>
				A Hortênsia, o Sininho, a Romeu-e-Julieta, a Tulipa e o Papo-de-anjo:
			</BeParagaph>
			<BeImage src={artworkPart6Image} alt={'Fullspread artwork'} />
			<BeParagaph>
				O jardineiro:
			</BeParagaph>
			<BeImage src={artworkPart7Image} alt={'Fullspread artwork'} />
			<BeHeading>Design do livro</BeHeading>
			<BePhotoGrid images={[
				{
					src: mockupCoverBackImage,
					alt: 'Mockup of cover and back cover',
				},
				{
					src: mockupPages0001Image,
					alt: 'Mockup of page 1',
				},
				{
					src: mockupPages0203Image,
					alt: 'Mockup of pages 2 and 3',
				},
				{
					src: mockupPages0405Image,
					alt: 'Mockup of pages 4 and 5',
				},
				{
					src: mockupPages0607Image,
					alt: 'Mockup of pages 6 and 7',
				},
				{
					src: mockupPages0809Image,
					alt: 'Mockup of pages 8 and 9',
				},
				{
					src: mockupPages1011Image,
					alt: 'Mockup of pages 10 and 11',
				},
				{
					src: mockupPages1213Image,
					alt: 'Mockup of pages 12 and 13',
				},
				{
					src: mockupPages1415Image,
					alt: 'Mockup of pages 14 and 15',
				},
				{
					src: mockupPages1617Image,
					alt: 'Mockup of pages 16 and 17',
				},
				{
					src: mockupPages1819Image,
					alt: 'Mockup of page 18',
				},
			]} cols={2}	/>

			<BeHeading>
				Design da coleção
			</BeHeading>
			
			<BeParagaph>
				Além das ilustrações desse, também realizei a editoração dos demais livros, e elaborei o projeto gráfico, da coleção &quot;Poeminhas&quot;.
			</BeParagaph>
			<BePhotoGrid
				images={[
					{
						src: coverPoeminhasReais,
						alt: 'Cover of Poeminhas Reais',
					},
					{
						src: coverPoeminhasFlorais,
						alt: 'Cover of Poeminhas Florais',
					},
					{
						src: coverPoeminhasVegetais,
						alt: 'Cover of Poeminhas Vegetais',
					},
					{
						src: coverPoeminhasProfissionais,
						alt: 'Cover of Poeminhas Profisisonais',
					},
					{
						src: coverPoeminhasLegais,
						alt: 'Cover of Poeminhas Legais',
					},
					{
						src: coverPoeminhasCelestiais,
						alt: 'Cover of Poeminhas Celestiais',
					},
				]}
				cols={3}
			/>
			<BeHeading>
				desenvolvimento da <strong>marca</strong>
			</BeHeading>
			<BeParagaph>
				Na mesma ocasião desenvolvi também o desenho da marca &quot;Corujinha Editora&quot;, que se tornou o selo da Editora Coruja voltado para a literatura infantil.
			</BeParagaph>
			<BeImage
				src={ marcaCorujinhaImage }
				alt={'Corujinha logotype'}
				horizontalPadding
				verticalPadding
			/>
			{/* <BeHeading backgroundColor='#454f37' foregroundColor='#fff'>As flores nesse livro</BeHeading> */}
			<BeThanks image={thanksImage} />
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

export default PoeminhasReaisChildrensBookIllustrationsPage