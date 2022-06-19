import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BeCredits from '../components/BeCredits';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagaph';
import BePhotoGrid from '../components/BePhotoGrid';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import SwitchLocale from '../components/SwitchLocale';
import SeeMore from '../models/SeeMore';
import alfabetoImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/alfabeto.jpg';
import alunosImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/alunos.jpg';
import autoEscolaImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/auto-escola.jpg';
import balaoFalaImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/balao-fala.jpg';
import batataImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/batata.jpg';
import bocarraCasinhaImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/bocarra-casinha.jpg';
import boloImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/bolo.jpg';
import cachorraoImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/cachorrao.jpg';
import cachorrinhoImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/cachorrinho.jpg';
import cameloImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/camelo.jpg';
import cidadeImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/cidade.jpg';
import dr1Image from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/dr-1.jpg';
import dr2Image from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/dr-2.jpg';
import espiaoImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/espiao.jpg';
import fechaduraImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/fechadura.jpg';
import fonemasImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/fonemas.jpg';
import gataoGatonaPezaoImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/gatona-gatao-pezao.jpg';
import matematicaImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/matematica.jpg';
import mockupImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/mockup.jpg';
import galoRaposaImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/o-galo-e-a-raposa.jpg';
import pirataImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/pirata.jpg';
import placaImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/placa.jpg';
import playgroundImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/playground.jpg';
import presenteImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/presente.jpg';
import redacaoImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/redacao.jpg';
import roughAlfabeto from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/rough-alfabeto.jpg';
import roughDoutores from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/rough-doutores.jpg';
import roughFonemasImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/rough-fonemas.jpg';
import selfieImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/selfie.jpg';
import skatistaImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/skatista.jpg';
import telefoneImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/telefone.jpg';


const GramaticaFundamental5Page: NextPage = () => {

	const seeMoreList: SeeMore[] = [
		{
			title: {
				en: 'More textbook',
				br: 'Mais livro didático',
			},
			slugs: ['brasil-na-bagagem-textbook-illustrations',],
		},
		{
			title: {
				en: 'See also children\'s books',
				br: 'Veja também livros infantis',
			},
			slugs: [
				'historias-da-ajudaris-20-childrens-book-illustrations',
			],
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
				src={ bocarraCasinhaImage }
				alt='Illustration for "Bocarra e casinha"'
			/>
			<BeCredits fields={[
				{
					label: 'Editora Moderna',
					value: {
						br: 'editora',
						en: 'publisher',
					}
				},
				{
					label: 'Daiane Alves Ramos',
					value: {
						br: 'edição de arte',
						en: 'art edition',
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
			<SwitchLocale
				en={
					<BeParagaph>
						The textbook Gramática Fundamental 5 (<em>&quot;Elementary Grammar 5&quot;</em>) is a publication by Editora Moderna aimed at students in the 5th grade of Elementary School.
					</BeParagaph>
				}
				br={
					<BeParagaph>
						O livro didático Gramática Fundamental 5 é uma publicação da Editora Moderna voltada para os alunos do 5º ano do Ensino Fundamental.
					</BeParagaph>
				}
			/>
			
			<BeImage
				src={ mockupImage }
				alt="Book digital mockup"
			/>
			<SwitchLocale
				en={
					<>
					<BeParagaph>
						The process starts with the creation of a worksheet containing the definition of each illustration of the book: codes, page number and description of the scene.
					</BeParagaph>
					<BeParagaph>
						Then, according to the description of the scene and layout defined by the designer, the roughs of all the illustrations are elaborated.
					</BeParagaph>
					</>
				}
				br={
					<>
						<BeParagaph>
							O processo começa com a criação de uma planilha contendo a definição de cada uma das ilustrações do livro: código, número da página e descrição da cena.
						</BeParagaph>
						<BeParagaph>
							Em seguida, de acordo com a cena e o layout definido pelo designer, são então elaborados os rascunhos de todas as ilustrações.
						</BeParagaph>
					</>
				}
			/>
			
			<BePhotoGrid images={[
				{
					src: roughFonemasImage,
					alt: 'Rough of "Fonemas e Letras" page',
				},
				{
					src: roughAlfabeto,
					alt: 'Rough of "Alfabeto" page',
				},
				{
					src: roughDoutores,
					alt: 'Rough of "Doutores" page',
				},
			]} cols={3} >
			</BePhotoGrid>

			<SwitchLocale
				en={
					<BeParagaph>
						Rough approved, the illustrations are then inked - may undergo some adjustments during digital painting.
					</BeParagaph>
				}
				br={
					<BeParagaph>
						Aprovados os rascunhos, as ilustrações são então arte-finalizadas — podendo sofrer alguns ajustes durante a pintura digital.
					</BeParagaph>
				}
			/>
			
			<BeImage
				src={ redacaoImage }
				alt='Illustration for "Redação"'
			/>
			<BeImage
				src={ gataoGatonaPezaoImage }
				alt='Illustration for "Gatão, gatona e pezão"'
			/>
			<BeImage
				src={ pirataImage }
				alt='Illustration for "Pontos cardeais"'
			/>
			<BeImage
				src={ fonemasImage }
				alt='Illustration of "Fonemas e Letras"'
			/>
			
			<BeImage
				src={ alfabetoImage }
				alt='Illustration for "Alfabeto"'
			/>
			<BePhotoGrid images={[
				{
					src: playgroundImage,
					alt:'Illustration of "Playground"'
				},
				{
					src: presenteImage,
					alt:'Illustration of "Presente"'
				},
				{
					src: alunosImage,
					alt:'Illustration of "Alunos"'
				},
			]} cols={3} ></BePhotoGrid>
			<BePhotoGrid images={[
				{
					src: selfieImage,
					alt:'Illustration of "Selfie"'
				},
				{
					src: cachorrinhoImage,
					alt:'Illustration of "Cachorrinho"'
				},
				{
					src: cachorraoImage,
					alt:'Illustration of "Cachorrão"'
				},
				
			]} cols={3} ></BePhotoGrid>
			<BeImage
				src={ balaoFalaImage }
				alt='Illustration for "Diálogo"'
			/>
			<BeImage
				src={ galoRaposaImage }
				alt='Illustration for "O galo e a raposa"'
			/>
			<BePhotoGrid images={[
				{
					src: batataImage,
					alt:'Illustration of "Quilograma"'
				},
				{
					src: boloImage,
					alt:'Illustration of "Bolo"'
				},
				{
					src: fechaduraImage,
					alt:'Illustration of "Fechadura"'
				},
				{
					src: telefoneImage,
					alt:'Illustration of "Telefone"'
				},
			]} cols={4} ></BePhotoGrid>
			<BeImage
				src={ matematicaImage }
				alt='Illustration for "Matemática"'
			/>
			<BePhotoGrid images={[
				{
					src: espiaoImage,
					alt:'Illustration of "Espião"'
				},
				{
					src: skatistaImage,
					alt:'Illustration of "Skatista"'
				},
				{
					src: placaImage,
					alt:'Illustration of "Placa"'
				},				
			]} cols={3} ></BePhotoGrid>

			<BeImage
				src={ cidadeImage }
				alt='Illustration for "Cidade"'
			/>

			<BePhotoGrid images={[
				
				{
					src: autoEscolaImage,
					alt:'Illustration of "Auto-escola"'
				},
				{
					src: cameloImage,
					alt:'Illustration of "Camelo e dromedário"'
				},
				
			]} cols={2} ></BePhotoGrid>
			

			<BeImage
				src={ dr1Image }
				alt='Illustration for "Doutores"'
			/>

			<BeImage
				src={ dr2Image }
				alt='Illustration for "Doutores"'
			/>

			<BeThanks />
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

export default GramaticaFundamental5Page