import { NextPage } from 'next'
import BeBody from '../components/BeBody'
import BeImage from '../components/BeImage'
import BeParagaph, { BeParagaphAlign } from '../components/BeParagaph'
import Page, { PageSection } from '../components/Page'

import bocarraCasinhaImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/bocarra-casinha.jpg'
import gataoGatonaPezaoImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/gatona-gatao-pezao.jpg'
import pirataImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/pirata.jpeg'
import mockupImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/mockup.jpg'
import roughFonemasImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/rough-fonemas.jpg'
import roughAlfabeto from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/rough-alfabeto.jpg'
import roughDoutores from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/rough-doutores.jpg'
import galoRaposaImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/o-galo-e-a-raposa.jpg'
import fonemasImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/fonemas.jpg'
import alfabetoImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/alfabeto.jpeg'
import alunosImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/alunos.jpg'
import autoEscolaImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/auto-escola.jpg'
import balaoFalaImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/balao-fala.jpeg'
import batataImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/batata.jpeg'
import boloImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/bolo.jpg'
import cachorraoImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/cachorrao.jpg'
import cachorrinhoImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/cachorrinho.jpg'
import cameloImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/camelo.jpg'
import cidadeImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/cidade.jpeg'
import dr1Image from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/dr-1.jpeg'
import dr2Image from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/dr-2.jpeg'
import espiaoImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/espiao.jpg'
import fechaduraImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/fechadura.jpg'
import matematicaImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/matematica.jpg'
import playgroundImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/playground.jpg'
import presenteImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/presente.jpg'
import redacaoImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/redacao.jpg'
import selfieImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/selfie.jpg'
import skatistaImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/skatista.jpeg'
import telefoneImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/telefone.jpeg'
import placaImage from '../public/content/gramatica-fundamental-5-moderna-textbook-illustrations/placa.jpeg'

import BePhotoGrid from '../components/BePhotoGrid'

const GramaticaFundamental5Page: NextPage = () => {
	const backwardLink = {
		text: 'Children\'s books and textbooks',
		href: '/childrens-books-and-textbooks',	
	}

	return (
		<Page title="Gramática Fundamental 5" subtitle="textbook illustrations" section={ PageSection.Portfolio }  backwardLink={ backwardLink }>
			<BeBody>
			<BeImage
					src={ bocarraCasinhaImage }
					alt='Illustration for "Bocarra e casinha"'
				/>
				<BeParagaph>
					O livro didático Gramática Fundamental 5 é uma publicação da Editora Moderna voltada para os alunos do 5º ano do Ensino Fundamental.
				</BeParagaph>
				<BeImage
					src={ mockupImage }
					alt="Book digital mockup"
				/>
				<BeParagaph>
					O processo começa com a definição de cada uma das ilustrações do livro: código, número de página e descrição da cena.
				</BeParagaph>
				<BeParagaph>
					Em seguida, de acordo com a cena e o layout definido pelo designer, são então elaborados os rascunhos de todas as ilustrações.
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
					Aprovados os rascunhos, a ilustrações são então arte-finalizadas — podendo sofrer alguns ajustes durante a pintura digital.
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
				<BeParagaph align={ BeParagaphAlign.Center }>
					Obrigado por dar uma olhada no meu trabalho!
				</BeParagaph>
				
				
				</BeBody>
		</Page>
	)
}

export default GramaticaFundamental5Page