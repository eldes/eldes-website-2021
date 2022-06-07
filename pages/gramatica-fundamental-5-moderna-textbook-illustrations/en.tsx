import { FunctionComponent } from 'react';
import BeCredits from '../../components/BeCredits';
import BeImage from '../../components/BeImage';
import BeParagaph, { BeParagaphAlign } from '../../components/BeParagaph';
import BePhotoGrid from '../../components/BePhotoGrid';
import BeThanks from '../../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../../components/PieceBePage';
import alfabetoImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/alfabeto.jpg';
import alunosImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/alunos.jpg';
import autoEscolaImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/auto-escola.jpg';
import balaoFalaImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/balao-fala.jpg';
import batataImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/batata.jpg';
import bocarraCasinhaImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/bocarra-casinha.jpg';
import boloImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/bolo.jpg';
import cachorraoImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/cachorrao.jpg';
import cachorrinhoImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/cachorrinho.jpg';
import cameloImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/camelo.jpg';
import cidadeImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/cidade.jpg';
import dr1Image from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/dr-1.jpg';
import dr2Image from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/dr-2.jpg';
import espiaoImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/espiao.jpg';
import fechaduraImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/fechadura.jpg';
import fonemasImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/fonemas.jpg';
import gataoGatonaPezaoImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/gatona-gatao-pezao.jpg';
import matematicaImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/matematica.jpg';
import mockupImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/mockup.jpg';
import galoRaposaImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/o-galo-e-a-raposa.jpg';
import pirataImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/pirata.jpg';
import placaImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/placa.jpg';
import playgroundImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/playground.jpg';
import presenteImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/presente.jpg';
import redacaoImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/redacao.jpg';
import roughAlfabeto from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/rough-alfabeto.jpg';
import roughDoutores from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/rough-doutores.jpg';
import roughFonemasImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/rough-fonemas.jpg';
import selfieImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/selfie.jpg';
import skatistaImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/skatista.jpg';
import telefoneImage from '../../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/telefone.jpg';


const PieceBePageEn: FunctionComponent = () => {

	return (
		<PieceBePage>
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
			<BeParagaph>
			The textbook Gramática Fundamental 5 (<em>&quot;Elementary Grammar 5&quot;</em>) is a publication by Editora Moderna aimed at students in the 5th grade of Elementary School.
			</BeParagaph>
			<BeImage
				src={ mockupImage }
				alt="Book digital mockup"
			/>
			<BeParagaph>
				The process starts with the creation of a worksheet containing the definition of each illustration of the book: codes, page number and description of the scene.
			</BeParagaph>
			<BeParagaph>
				Then, according to the description of the scene and layout defined by the designer, the roughs of all the illustrations are elaborated.
			</BeParagaph>
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
			<BeParagaph>
				Rough approved, the illustrations are then inked - may undergo some adjustments during digital painting.
			</BeParagaph>
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

export default PieceBePageEn;