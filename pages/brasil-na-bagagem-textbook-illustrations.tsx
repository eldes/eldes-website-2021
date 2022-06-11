import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BeCredits from '../components/BeCredits';
import BeEmbed from '../components/BeEmbed';
import BeHeading from '../components/BeHeading';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagaph';
import BePhotoGrid from '../components/BePhotoGrid';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import SwitchLocale from '../components/SwitchLocale';
import bilingueImage from '../public/content/brasil-na-bagagem-textbook-illustrations/bilingue.jpg';
import boiBumbaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/boi-bumba.jpg';
import boitataColorsImage from '../public/content/brasil-na-bagagem-textbook-illustrations/boitata-colors.jpg';
import boitataRoughImage from '../public/content/brasil-na-bagagem-textbook-illustrations/boitata-rough.jpg';
import boitataImage from '../public/content/brasil-na-bagagem-textbook-illustrations/boitata.jpg';
import bookCoverMockupImage from '../public/content/brasil-na-bagagem-textbook-illustrations/book-cover-mockup.jpg';
import bookMockupImage from '../public/content/brasil-na-bagagem-textbook-illustrations/book-mockup.jpg';
import brokenTelephoneImage from '../public/content/brasil-na-bagagem-textbook-illustrations/broken-telephone.jpg';
import carnavalRoughImage from '../public/content/brasil-na-bagagem-textbook-illustrations/carnaval--rough.jpg';
import carnavalImage from '../public/content/brasil-na-bagagem-textbook-illustrations/carnaval.jpg';
import correCotiaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/corre-cotia.jpg';
import cravoRosaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/cravo-e-rosa.jpg';
import cuicaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/cuica.jpg';
import curupiraImage from '../public/content/brasil-na-bagagem-textbook-illustrations/curupira.jpg';
import arrozComFeijaoImage from '../public/content/brasil-na-bagagem-textbook-illustrations/feijao-com-arroz.jpg';
import fingerNamesImage from '../public/content/brasil-na-bagagem-textbook-illustrations/finger-names.jpg';
import indigenousRoughImage from '../public/content/brasil-na-bagagem-textbook-illustrations/indigenous--rough.jpg';
import indigenousImage from '../public/content/brasil-na-bagagem-textbook-illustrations/indigenous.jpg';
import locucoesLugarImage from '../public/content/brasil-na-bagagem-textbook-illustrations/locucoes-lugar.jpg';
import mapaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/mapa.jpg';
import mulaSemCabeca1Image from '../public/content/brasil-na-bagagem-textbook-illustrations/mula-sem-cabeca-1.jpg';
import mulaSemCabeca2Image from '../public/content/brasil-na-bagagem-textbook-illustrations/mula-sem-cabeca-2.jpg';
import ocaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/oca.jpg';
import playAliveOrDeadRoughImage from '../public/content/brasil-na-bagagem-textbook-illustrations/play-alive-or-dead--simon-says-similar--rough.jpg';
import playAliveOrDeadImage from '../public/content/brasil-na-bagagem-textbook-illustrations/play-alive-or-dead--simon-says-similar.jpg';
import pombinhaBrancaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/pombinha-branca.jpg';
import reguaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/regua.jpg';
import roughBoitata from '../public/content/brasil-na-bagagem-textbook-illustrations/rough-boitata.jpg';
import roughFingerNames from '../public/content/brasil-na-bagagem-textbook-illustrations/rough-finger-names.jpg';
import roughMulaSemCabeca from '../public/content/brasil-na-bagagem-textbook-illustrations/rough-mula-sem-cabeca.jpg';
import roughSaci from '../public/content/brasil-na-bagagem-textbook-illustrations/rough-saci.jpg';
import roughVitoriaRegia from '../public/content/brasil-na-bagagem-textbook-illustrations/rough-vitoria-regia.jpg';
import roughWerewolf from '../public/content/brasil-na-bagagem-textbook-illustrations/rough-werewolf.jpg';
import saci1Image from '../public/content/brasil-na-bagagem-textbook-illustrations/saci-1.jpg';
import saci2Image from '../public/content/brasil-na-bagagem-textbook-illustrations/saci-2.jpg';
import saci3Image from '../public/content/brasil-na-bagagem-textbook-illustrations/saci-3.jpg';
import tremBImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-b.jpg';
import tremCImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-c.jpg';
import tremDImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-d.jpg';
import tremFImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-f.jpg';
import tremGImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-g.jpg';
import tremHImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-h.jpg';
import tremJImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-j.jpg';
import tremLImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-l.jpg';
import tremMImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-m.jpg';
import tremNImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-n.jpg';
import tremPImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-p.jpg';
import tremQImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-q.jpg';
import tremRImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-r.jpg';
import tremSImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-s.jpg';
import tremTImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-t.jpg';
import tremVImage from '../public/content/brasil-na-bagagem-textbook-illustrations/trem-v.jpg';
import tupiImage from '../public/content/brasil-na-bagagem-textbook-illustrations/tupi.jpg';
import ventriloquistImage from '../public/content/brasil-na-bagagem-textbook-illustrations/ventriloquist.jpg';
import vitoriaRegiaImage from '../public/content/brasil-na-bagagem-textbook-illustrations/vitoria-regia.jpg';
import werewolfImage from '../public/content/brasil-na-bagagem-textbook-illustrations/werewolf.jpg';

const BrasilNaBagagemTextbookIllustrationsPage: NextPage = () => {
	return (
		<PieceBePage>
			<BeImage
				src={ brokenTelephoneImage }
				alt="Broken telephone illutration"
			/>
			<BeCredits fields={[
				{
					label: 'Intercultural Language Center',
					value: {
						br: 'editora',
						en: 'publisher',
					}
				},
				{
					label: 'Erika Campanharo',
					value: {
						br: 'texto',
						en: 'text',
					}
				},
				{
					label: 'Muiraquitã Editoração Gráfica',
					value: {
						br: 'design',
						en: 'design',
					}
				},
				{
					label: 'Alexandre Matos',
					value: {
						br: 'capa',
						en: 'book cover',
					}
				},
				{
					label: 'Eldes',
					value: {
						br: 'ilustrações pesonalizadas',
						en: 'Custom illustrations',
					}
				},
			]}/>
			<BeImage
				src={ bookCoverMockupImage }
				alt="Book cover mockup"
			/>
			<SwitchLocale
				en={
					<BeParagaph>
						Brasil na Bagagem (Brazil in The Baggage), written by Erika Campanharo, it&apos;s a didactic book for children and teenagers living outside of Brazil and aimed at literacy, expanding and developing the Portuguese language and also strengthening the bond with Brazilian culture.
					</BeParagaph>
				}
				br={
					<BeParagaph>
						O Brasil na Bagagem, da autora Erika Campanharo, é um livro didático dirigido a crianças e adolescentes vivendo fora do Brasil e voltado para alfabetizar, ampliar e desenvolver a linguagem em português e também estreitar o vínculo com a cultura brasileira.
					</BeParagaph>
				}
			/>
			
			<BeImage
				src={ bookMockupImage }
				alt="Book mockup"
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
							Em seguida, de acordo com a descrição da cena e com o layout definido pelo designer, são então elaborados os rascunhos de todas as ilustrações.
						</BeParagaph>
					</>
				}
			/>
			
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
			]} cols={ 3 } />
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

			<SwitchLocale
				en={
					<BeHeading>
						Brazilian folklore
					</BeHeading>
				}
				br={
					<BeHeading>
						Folclore brasileiro
					</BeHeading>
				}
			/>
			
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
			]} cols={ 3 } fill={ true } />
			<BePhotoGrid images={[
				{
					src: curupiraImage,
					alt: 'Illustration of curupira',
				},
				{
					src: werewolfImage,
					alt: 'Illustration of werewolf',
				},
			]} cols={ 2 } fill={ true } />
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
			]} cols={ 3 } fill={ true } />
			<BePhotoGrid images={[
				{
					src: mulaSemCabeca1Image,
					alt: 'Illustration of mula sem cabeca',
				},
				{
					src: vitoriaRegiaImage,
					alt: 'Illustration of vitoria regia',
				},
			]} cols={ 2 } fill={ true } />
			<BePhotoGrid images={[
				{
					src: mulaSemCabeca2Image,
					alt: 'Illustration of mula sem cabeca',
				},
			]} cols={ 1 } />
			<BeEmbed aspectRatioPercent={56.25}>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/OoVGZsGJ33E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</BeEmbed>

			<SwitchLocale
				en={
					<BeHeading>
						Brazilian culture verses and songs:
					</BeHeading>
				}
				br={
					<BeHeading>
						Parlendas e cantigas da cultura brasileira:
					</BeHeading>
				}
			/>
			
			<BePhotoGrid images={[
				{
					src: pombinhaBrancaImage,
					alt: 'Illustration of Pombinha Branca',
				},
				{
					src: cravoRosaImage,
					alt: 'Illustration of O Cravo e a Rosa',
				},
			]} cols={ 2 } fill={ true } />

			<SwitchLocale
				en={
					<BeHeading>
						Traditional games:
					</BeHeading>
				}
				br={
					<BeHeading>
						Brincadeiras tradicionais:
					</BeHeading>
				}
			/>
			
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
			]} cols={ 2 } fill={ true }/>

			<SwitchLocale
				en={
					<BeHeading>
						Brazillian culture celebrations:<br/><small>[drawings to color]</small>
					</BeHeading>
				}
				br={
					<BeHeading>
						Festas da cultura brasileira:<br/><small>[desenhos para colorir]</small>
					</BeHeading>
				}
			/>
			
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
			]} cols={ 3 } fill={ true } />

			<SwitchLocale
				en={
					<BeHeading>
						Native people of Brazil:
					</BeHeading>
				}
				br={
					<BeHeading>
						Povos originários do Brasil:
					</BeHeading>
				}
			/>
			
			<BePhotoGrid images={[
				{
					src: indigenousRoughImage,
					alt: 'Illustration rough of a Brazilian indigenous',
				},
				{
					src: indigenousImage,
					alt: 'Illustration of a Brazilian indigenous',
				},
			]} cols={ 2 } fill={ true } />
			<BePhotoGrid images={[
				{
					src: ocaImage,
					alt: 'Illustration of a typical Brazilian indigenous housing',
				},
				{
					src: tupiImage,
					alt: 'Illustration about Brazilian linguistic family Tupi',
				},
			]} cols={ 1 } />

			<SwitchLocale
				en={
					<BeHeading>
						Others:
					</BeHeading>
				}
				br={
					<BeHeading>
						Diversos:
					</BeHeading>
				}
			/>

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
			]} cols={ 3 } fill={ true } />
			<BePhotoGrid images={[
				{
					src: locucoesLugarImage,
					alt: 'Illustration of books and boxes: locutions of place',
				},
				{
					src: reguaImage,
					alt: 'Illustration of a ruler',
				},
			]} cols={ 2 } fill={ true } />
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
			]} cols={ 2 } fill={ true } />

			<BePhotoGrid images={[
				{
					src: arrozComFeijaoImage,
					alt: 'Illustration of a typical Brazilian dish',
				},
				{
					src: ventriloquistImage,
					alt: 'Illustration of a ventriloquist',
				},
			]} cols={ 2 } fill={ true } />

			<BeThanks image={fingerNamesImage} />
		</PieceBePage>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', [...pieceBePageI18nNamespace])),
		}
	}
}

export default BrasilNaBagagemTextbookIllustrationsPage;