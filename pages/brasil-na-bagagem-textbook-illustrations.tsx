import { NextPage } from 'next'
import BeImage from '../components/BeImage'
import BeParagaph from '../components/BeParagaph'
import Page, { PageSection } from '../components/Page'

import brokenTelephoneImage from '../public/content/brasil-na-bagagem-textbook-illustrations/broken-telephone.jpg'
import bookCoverMockupImage from '../public/content/brasil-na-bagagem-textbook-illustrations/book-cover-mockup.jpg'
import bookMockupImage from '../public/content/brasil-na-bagagem-textbook-illustrations/book-mockup.jpg'
import roughBoitata from '../public/content/brasil-na-bagagem-textbook-illustrations/rough-boitata.jpg'
import roughFingerNames from '../public/content/brasil-na-bagagem-textbook-illustrations/rough-finger-names.jpg'
import roughMulaSemCabeca from '../public/content/brasil-na-bagagem-textbook-illustrations/rough-mula-sem-cabeca.jpg'
import roughSaci from '../public/content/brasil-na-bagagem-textbook-illustrations/rough-saci.jpg'
import roughVitoriaRegia from '../public/content/brasil-na-bagagem-textbook-illustrations/rough-vitoria-regia.jpg'
import roughWerewolf from '../public/content/brasil-na-bagagem-textbook-illustrations/rough-werewolf.jpg'
import saci1Image from '../public/content/brasil-na-bagagem-textbook-illustrations/saci-1.jpg'
import saci2Image from '../public/content/brasil-na-bagagem-textbook-illustrations/saci-2.jpg'
import saci3Image from '../public/content/brasil-na-bagagem-textbook-illustrations/saci-3.jpg'
import curupiraImage from '../public/content/brasil-na-bagagem-textbook-illustrations/curupira.jpg'
import werewolfImage from '../public/content/brasil-na-bagagem-textbook-illustrations/werewolf.jpg'
import boitataRoughImage from '../public/content/brasil-na-bagagem-textbook-illustrations/boitata-rough.jpg'
import boitataColorsImage from '../public/content/brasil-na-bagagem-textbook-illustrations/boitata-colors.jpg'
import boitataImage from '../public/content/brasil-na-bagagem-textbook-illustrations/boitata.jpg'
import mulaSemCabeca1Image from '../public/content/brasil-na-bagagem-textbook-illustrations/mula-sem-cabeca-1.jpg'
import vitoriaRegiaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/vitoria-regia.jpg'
import mulaSemCabeca2Image from '../public/content/brasil-na-bagagem-textbook-illustrations/mula-sem-cabeca-2.jpg'
import pombinhaBrancaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/pombinha-branca.jpg'
import cravoRosaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/cravo-e-rosa.jpg'
import correCotiaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/corre-cotia.jpg'
import playAliveOrDeadRoughImage from '../public/content/brasil-na-bagagem-textbook-illustrations/play-alive-or-dead--simon-says-similar--rough.jpg'
import playAliveOrDeadImage from '../public/content/brasil-na-bagagem-textbook-illustrations/play-alive-or-dead--simon-says-similar.jpg'
import boiBumbaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/boi-bumba.jpg'
import carnavalRoughImage from '../public/content/brasil-na-bagagem-textbook-illustrations/carnaval--rough.jpg'
import carnavalImage from '../public/content/brasil-na-bagagem-textbook-illustrations/carnaval.jpg'
import indigenousRoughImage from '../public/content/brasil-na-bagagem-textbook-illustrations/indigenous--rough.jpg'
import indigenousImage from '../public/content/brasil-na-bagagem-textbook-illustrations/indigenous.jpg'
import ocaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/oca.jpg'
import tupiImage from '../public/content/brasil-na-bagagem-textbook-illustrations/tupi.jpg'
import arrozComFeijaoImage from '../public/content/brasil-na-bagagem-textbook-illustrations/feijao-com-arroz.jpg'
import ventriloquistImage from '../public/content/brasil-na-bagagem-textbook-illustrations/ventriloquist.jpg'
import tremBImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-b.jpg'
import tremCImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-c.jpg'
import tremDImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-d.jpg'
import tremFImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-f.jpg'
import tremGImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-g.jpg'
import tremHImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-h.jpg'
import tremJImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-j.jpg'
import tremLImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-l.jpg'
import tremMImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-m.jpg'
import tremNImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-n.jpg'
import tremPImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-p.jpg'
import tremQImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-q.jpg'
import tremRImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-r.jpg'
import tremSImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-s.jpg'
import tremTImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-t.jpg'
import tremVImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-v.jpg'
import mapaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/mapa.jpg'
import bilingueImage from '../public/content/brasil-na-bagagem-textbook-illustrations/bilingue.jpg'
import cuicaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/cuica.jpg'
import reguaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/regua.jpg'
import locucoesLugarImage from '../public/content/brasil-na-bagagem-textbook-illustrations/locucoes-lugar.jpg'

import fingerNamesImage from '../public/content/brasil-na-bagagem-textbook-illustrations/finger-names.jpg'
import BeBody from '../components/BeBody'
import BePhotoGrid from '../components/BePhotoGrid'
import BeHeading from '../components/BeHeading'
import BeEmbed from '../components/BeEmbed'

const BrasilNaBagagemTextbookIllustrationsPage: NextPage = () => {

	const backgroundColor = '#fcaf17'
	const foregroundColor = '#ffffff'

	return (
		<Page title="Brasil na Bagagem" subtitle="textbook illustrations" section={ PageSection.Portfolio }>
			<BeBody>
				<BeImage
					src={ brokenTelephoneImage }
					alt="Broken telephone illutration"
				/>
				<BeImage
					src={ bookCoverMockupImage }
					alt="Book cover mockup"
					backgroundColor={ backgroundColor }
					fill={ true }
				/>
				<BeParagaph backgroundColor={ backgroundColor } style={{ textAlign: 'center', color: foregroundColor,  }}>
					O Brasil na Bagagem, da autora Erika Campanharo, é um livro didático dirigido a crianças e adolescentes vivendo fora do Brasil. É voltado para alfabetizar, ampliar e desenvolver a linguagem em português e também estreitar o vínculo com a cultura brasileira.
				</BeParagaph>
				<BeImage
					src={ bookMockupImage }
					alt="Book mockup"
					backgroundColor={ backgroundColor }
					fill={ true }
				/>
				<BeParagaph backgroundColor={ backgroundColor } style={{ textAlign: 'center', color: foregroundColor }}>
					O processo começa com a definição de todas as ilustrações do livro, composta pelo código, o número de página e a descrição da cena de cada uma delas.
				</BeParagaph>
				<BeParagaph backgroundColor={ backgroundColor } style={{ textAlign: 'center', color: foregroundColor }}>
					E, na sequência, são elaborados os rascunhos de todas as ilustrações, de acordo com a cena e o layout definido pelo designer.
				</BeParagaph>
				<BePhotoGrid images={[
					{
						src: roughBoitata,
						alt: 'Rough of Boitata page',
					},
					{
						src: roughFingerNames,
						alt: 'Rough of Finger Names page',
					},
					{
						src: roughMulaSemCabeca,
						alt: 'Rough of Mula Sem Cabeca page',
					},
					{
						src: roughSaci,
						alt: 'Rough of Saci page',
					},
					{
						src: roughVitoriaRegia,
						alt: 'Rough of Vitoria Regia page',
					},
					{
						src: roughWerewolf,
						alt: 'Rough of Werewolf Names page',
					},
				]} cols={3} backgroundColor={ backgroundColor } />
				<BeParagaph backgroundColor={ backgroundColor } style={{ textAlign: 'center', color: foregroundColor }}>
					Aprovados os rascunhos, a ilustrações são então arte-finalizadas — podendo sofrer alguns ajustes durante a pintura digital.
				</BeParagaph>
				<BeHeading backgroundColor={ backgroundColor } color="#ffffff">
					<strong>Folclore</strong> brasileiro:
				</BeHeading>
				<BePhotoGrid images={[
					{
						src: saci1Image,
						alt: 'Illustration of saci',
					},
					{
						src: saci2Image,
						alt: 'Illustration of saci',
					},
					{
						src: saci3Image,
						alt: 'Illustration of saci',
					},
				]} cols={3} backgroundColor={ backgroundColor } />
				<BePhotoGrid images={[
					{
						src: curupiraImage,
						alt: 'Illustration of curupira',
					},
					{
						src: werewolfImage,
						alt: 'Illustration of werewolf',
					},
				]} cols={2} backgroundColor={ backgroundColor } />
				<BePhotoGrid images={[
					{
						src: boitataRoughImage,
						alt: 'Illustration rough of boitata',
					},
					{
						src: boitataColorsImage,
						alt: 'Colors for illustration of boitata',
					},
					{
						src: boitataImage,
						alt: 'Illustration of boitata',
					},
				]} cols={3} backgroundColor={ backgroundColor } />
				<BePhotoGrid images={[
					{
						src: mulaSemCabeca1Image,
						alt: 'Illustration of mula sem cabeca',
					},
					{
						src: vitoriaRegiaImage,
						alt: 'Illustration of vitoria regia',
					},
				]} cols={2} backgroundColor={ backgroundColor } />
				<BePhotoGrid images={[
					{
						src: mulaSemCabeca2Image,
						alt: 'Illustration of mula sem cabeca',
					},
				]} cols={1} backgroundColor={ backgroundColor } />
				<BeEmbed aspectRatioPercent={56.25} backgroundColor={ backgroundColor }>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/OoVGZsGJ33E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</BeEmbed>
				<BeHeading backgroundColor={ backgroundColor } color="#ffffff">
					<strong>Parlendas e cantigas</strong> da cultura brasileira:
				</BeHeading>
				<BePhotoGrid images={[
					{
						src: pombinhaBrancaImage,
						alt: 'Illustration of Pombinha Branca',
					},
					{
						src: cravoRosaImage,
						alt: 'Illustration of O Cravo e a Rosa',
					},
				]} cols={2} backgroundColor={ backgroundColor } />
				<BeHeading backgroundColor={ backgroundColor } color="#ffffff">
					<strong>Brincadeiras</strong> tradicionais:
				</BeHeading>
				<BePhotoGrid images={[
					{
						src: correCotiaImage,
						alt: 'Illustration of Corre Cotia',
					},
					{
						src: brokenTelephoneImage,
						alt: 'Illustration of Broken Telephone',
					},
					{
						src: playAliveOrDeadRoughImage,
						alt: 'Illustration rough of Alive or Dead',
					},
					{
						src: playAliveOrDeadImage,
						alt: 'Illustration of Alive or Dead',
					},
				]} cols={2} backgroundColor={ backgroundColor } />

				<BeHeading backgroundColor={ backgroundColor } color="#ffffff">
					<strong>Festas</strong> da cultura brasileira:
				</BeHeading>
				<BeParagaph backgroundColor={ backgroundColor } style={{ textAlign: 'center', color: foregroundColor }}>
					[desenhos para colorir]
				</BeParagaph>
				<BePhotoGrid images={[
					{
						src: boiBumbaImage,
						alt: 'Illustration of Boi Bumba',
					},
					{
						src: carnavalRoughImage,
						alt: 'Illustration rough of Carnaval',
					},
					{
						src: carnavalImage,
						alt: 'Illustration of Carnaval',
					},
				]} cols={3} backgroundColor={ backgroundColor } />

				<BeHeading backgroundColor={ backgroundColor } color="#ffffff">
					<strong>Povos originários</strong> do Brasil:
				</BeHeading>
				<BePhotoGrid images={[
					{
						src: indigenousRoughImage,
						alt: 'Illustration rough of a Brazilian indigenous',
					},
					{
						src: indigenousImage,
						alt: 'Illustration of a Brazilian indigenous',
					},
				]} cols={2} backgroundColor={ backgroundColor } />
				<BePhotoGrid images={[
					{
						src: ocaImage,
						alt: 'Illustration of a typical Brazilian indigenous housing',
					},
					{
						src: tupiImage,
						alt: 'Illustration about Brazilian linguistic family Tupi',
					},
				]} cols={1} backgroundColor={ backgroundColor } />

				<BeHeading backgroundColor={ backgroundColor } color="#ffffff">
					<strong>Diversos:</strong>
				</BeHeading>
				<BePhotoGrid images={[
					{
						src: mapaImage,
						alt: 'Illustration of a 3D map of a city',
					},
					{
						src: bilingueImage,
						alt: 'Illustration of a bilingual girl saying "Oi" and "Hi"',
					},
					{
						src: cuicaImage,
						alt: 'illustration of a typical Brazilian musical instrument: cuica',
					},
				]} cols={3} cellBackgroundColor="#fff" backgroundColor={ backgroundColor } />
				<BePhotoGrid images={[
					{
						src: locucoesLugarImage,
						alt: 'Illustration of books and boxes: locutions of place',
					},
					{
						src: reguaImage,
						alt: 'Illustration of a ruler',
					},
				]} cols={2} cellBackgroundColor="#fff" backgroundColor={ backgroundColor } />
				<BePhotoGrid images={[
					{
						src: tremBImage,
						alt: 'Illustration of a train',
					},
					{
						src: tremDImage,
						alt: 'Illustration of a train',
					},
					{
						src: tremCImage,
						alt: 'Illustration of a train',
					},
					{
						src: tremFImage,
						alt: 'Illustration of a train',
					},
					{
						src: tremHImage,
						alt: 'Illustration of a train',
					},
					{
						src: tremGImage,
						alt: 'Illustration of a train',
					},
					{
						src: tremLImage,
						alt: 'Illustration of a train',
					},
					{
						src: tremJImage,
						alt: 'Illustration of a train',
					},
					{
						src: tremNImage,
						alt: 'Illustration of a train',
					},
					{
						src: tremMImage,
						alt: 'Illustration of a train',
					},
					{
						src: tremQImage,
						alt: 'Illustration of a train',
					},
					{
						src: tremPImage,
						alt: 'Illustration of a train',
					},
					{
						src: tremSImage,
						alt: 'Illustration of a train',
					},
					{
						src: tremRImage,
						alt: 'Illustration of a train',
					},
					{
						src: tremVImage,
						alt: 'Illustration of a train',
					},
					{
						src: tremTImage,
						alt: 'Illustration of a train',
					},
				]} cols={2} backgroundColor={ backgroundColor } />

				<BePhotoGrid images={[
					{
						src: arrozComFeijaoImage,
						alt: 'Illustration of a typical Brazilian dish',
					},
					{
						src: ventriloquistImage,
						alt: 'Illustration of a ventriloquist',
					},
				]} cols={2} backgroundColor={ backgroundColor } />

				<BeImage
					src={ fingerNamesImage }
					alt="Finger names illutration"
					backgroundColor={ backgroundColor }
					fill={ true }
				/>
				<BeParagaph style={{ textAlign: 'center' }}>
					Obrigado por dar uma olhada no meu trabalho!
				</BeParagaph>
			</BeBody>
		</Page>
	)
}
export default BrasilNaBagagemTextbookIllustrationsPage