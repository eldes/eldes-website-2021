import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import BeBody from '../components/BeBody'
import BeCredits from '../components/BeCredits'
import BeHeading from '../components/BeHeading'
import BeImage from '../components/BeImage'
import BeParagaph, { BeParagaphAlign } from '../components/BeParagaph'
import BePhotoGrid from '../components/BePhotoGrid'
import BeThanks from '../components/BeThanks'
import PiecePage, { piecePageI18nNamespace } from '../components/PiecePage'
import apresentacaoImage from '../public/content/como-eram-os-animais-cordel-childrens-book/apresentacao.png'
import autoresImage from '../public/content/como-eram-os-animais-cordel-childrens-book/autores.png'
import avestruzImage from '../public/content/como-eram-os-animais-cordel-childrens-book/avestruz.png'
import bodeImage from '../public/content/como-eram-os-animais-cordel-childrens-book/bode.png'
import burroImage from '../public/content/como-eram-os-animais-cordel-childrens-book/burro.png'
import cachorroImage from '../public/content/como-eram-os-animais-cordel-childrens-book/cachorro.png'
import cigarraImage from '../public/content/como-eram-os-animais-cordel-childrens-book/cigarra.png'
import cobraImage from '../public/content/como-eram-os-animais-cordel-childrens-book/cobra.png'
import coelhoImage from '../public/content/como-eram-os-animais-cordel-childrens-book/coelho.png'
import corujaImage from '../public/content/como-eram-os-animais-cordel-childrens-book/coruja.png'
import coverRough1Image from '../public/content/como-eram-os-animais-cordel-childrens-book/cover-rough-1.jpg'
import coverRough2Image from '../public/content/como-eram-os-animais-cordel-childrens-book/cover-rough-2.jpg'
import coverImage from '../public/content/como-eram-os-animais-cordel-childrens-book/cover.jpg'
import dedicationCidaImage from '../public/content/como-eram-os-animais-cordel-childrens-book/dedication-cida.jpg'
import dedicationFloraImage from '../public/content/como-eram-os-animais-cordel-childrens-book/dedication-flora.jpg'
import dedicationHelenaImage from '../public/content/como-eram-os-animais-cordel-childrens-book/dedication-helena.jpg'
import dedicationLuciaImage from '../public/content/como-eram-os-animais-cordel-childrens-book/dedication-lucia.jpg'
import dedicationLunaImage from '../public/content/como-eram-os-animais-cordel-childrens-book/dedication-luna.jpg'
import dedicationMagdaImage from '../public/content/como-eram-os-animais-cordel-childrens-book/dedication-magda.jpg'
import dedicationMatheusImage from '../public/content/como-eram-os-animais-cordel-childrens-book/dedication-matheus.jpg'
import dedicationMorganaImage from '../public/content/como-eram-os-animais-cordel-childrens-book/dedication-morgana.jpg'
import dedicationPedroImage from '../public/content/como-eram-os-animais-cordel-childrens-book/dedication-pedro.jpg'
import dedicationSilviaImage from '../public/content/como-eram-os-animais-cordel-childrens-book/dedication-silvia.jpg'
import dinossauroImage from '../public/content/como-eram-os-animais-cordel-childrens-book/dinossauro.png'
import elefanteImage from '../public/content/como-eram-os-animais-cordel-childrens-book/elefante.png'
import galoImage from '../public/content/como-eram-os-animais-cordel-childrens-book/galo.png'
import girafaImage from '../public/content/como-eram-os-animais-cordel-childrens-book/girafa.png'
import griloImage from '../public/content/como-eram-os-animais-cordel-childrens-book/grilo.png'
import guineImage from '../public/content/como-eram-os-animais-cordel-childrens-book/guine.png'
import jacareImage from '../public/content/como-eram-os-animais-cordel-childrens-book/jacare.png'
import leaoImage from '../public/content/como-eram-os-animais-cordel-childrens-book/leao.png'
import leitorImage from '../public/content/como-eram-os-animais-cordel-childrens-book/leitor.png'
import lobisomemImage from '../public/content/como-eram-os-animais-cordel-childrens-book/lobisomem.png'
import macacoImage from '../public/content/como-eram-os-animais-cordel-childrens-book/macaco.png'
import mockupImage from '../public/content/como-eram-os-animais-cordel-childrens-book/mockup.jpg'
import morcegoImage from '../public/content/como-eram-os-animais-cordel-childrens-book/morcego.png'
import mosquitoImage from '../public/content/como-eram-os-animais-cordel-childrens-book/mosquito.png'
import oncaImage from '../public/content/como-eram-os-animais-cordel-childrens-book/onca.png'
import pavaoImage from '../public/content/como-eram-os-animais-cordel-childrens-book/pavao.png'
import porcoEspinhoImage from '../public/content/como-eram-os-animais-cordel-childrens-book/porco-espinho.png'
import porcoImage from '../public/content/como-eram-os-animais-cordel-childrens-book/porco.png'
import preguicaImage from '../public/content/como-eram-os-animais-cordel-childrens-book/preguica.png'
import ratoImage from '../public/content/como-eram-os-animais-cordel-childrens-book/rato.png'
import tartarugaImage from '../public/content/como-eram-os-animais-cordel-childrens-book/tartaruga.png'
import tatuImage from '../public/content/como-eram-os-animais-cordel-childrens-book/tatu.png'
import thanksImage from '../public/content/como-eram-os-animais-cordel-childrens-book/thanks.png'
import urubuImage from '../public/content/como-eram-os-animais-cordel-childrens-book/urubu.png'

const ComoEramOsAnimaisCordelChildrensBook: NextPage = () => (
	<PiecePage>
		<BeBody>
			<BeImage src={ratoImage} alt={'Illustration for the stanza of mouse'} />
			<BeCredits
				clientName='Réptil Editora'
				work='illustrations'
			>
				Book selected by FNLIJ (National Foundation of Childrens and Young Adult Book) for 48th Bologna Children&apos;s Book Fair.
			</BeCredits>
			<BeImage src={mockupImage} alt={'Illustration for the stanza of mouse'} />
			<BeParagaph>
				Poems that address different animals in the form of cordel literature (six-verse stanzas). They are fun verses, full of nonsense. The poet plays with the sound of the words, and reinvents the animal world.
			</BeParagaph>
			<BeHeading>
				<strong>Interior</strong> illustrations
			</BeHeading>
			<BeParagaph>
				Each animal received a stanza and each stanza a full-page illustration.
				The style of the illustrations refers to the woodcut art, characteristic of the Brazilian Cordel.
			</BeParagaph>
			<BePhotoGrid images={[
				{
					src: apresentacaoImage,
					alt: 'Illustration of Intro stanza'
				},
			]} cols={1}			/>
			<BePhotoGrid images={[
				{
					src: ratoImage,
					alt: 'Illustration for the stanza of mouse'
				},
				{
					src: jacareImage,
					alt: 'Illustration for the stanza of alligator'
				},
				{
					src: oncaImage,
					alt: 'Illustration for the stanza of jaguar'
				},
				{
					src: burroImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: griloImage,
					alt: 'Illustration for the stanza of jaguar'
				},
				{
					src: urubuImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: porcoImage,
					alt: 'Illustration for the stanza of jaguar'
				},
				{
					src: tartarugaImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: macacoImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: guineImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: preguicaImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: mosquitoImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: porcoEspinhoImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: morcegoImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: cobraImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: bodeImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: elefanteImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: girafaImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: cachorroImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: corujaImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: galoImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: coelhoImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: pavaoImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: leaoImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: cigarraImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: avestruzImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: tatuImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: dinossauroImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: lobisomemImage,
					alt: 'Illustration for the stanza of donkey'
				},
				{
					src: leitorImage,
					alt: 'Illustration for the stanza of donkey'
				},
			]} cols={3}>
				

			</BePhotoGrid>
			<BePhotoGrid
				images={[
					{
						src: autoresImage,
						alt: 'Illustration of the authors'
					},
				]} cols={1}
			/>
			<BeHeading>
				<strong>Cover</strong> illustration
			</BeHeading>
			<BePhotoGrid images={[
				{
					src: coverRough1Image,
					alt: 'Rough of cover',
				},
				{
					src: coverRough2Image,
					alt: 'Rough of cover',
				},
			]} cols={2} />
			<BeImage
				src={coverImage}
				alt={'Cover illustration'}				
			/>
			<BeHeading>
				Dedications
			</BeHeading>
			<BePhotoGrid
				images={[
					
					{
						src: dedicationFloraImage,
						alt: 'Dedication to Flora',
					},
					{
						src: dedicationHelenaImage,
						alt: 'Dedication to Helena',
					},
					{
						src: dedicationCidaImage,
						alt: 'Dedication to Cida',
					},
					{
						src: dedicationLuciaImage,
						alt: 'Dedication to Lúcia',
					},
					{
						src: dedicationLunaImage,
						alt: 'Dedication to Pedro',
					},
					{
						src: dedicationMagdaImage,
						alt: 'Dedication to Magda',
					},
					{
						src: dedicationMatheusImage,
						alt: 'Dedication to Matheus',
					},
					{
						src: dedicationPedroImage,
						alt: 'Dedication to Pedro',
					},
					{
						src: dedicationSilviaImage,
						alt: 'Dedication to Sílvia',
					},
					{
						src: dedicationMorganaImage,
						alt: 'Dedication to Morgana',
					},
				]}
				cols={3}
			/>
			<BeThanks image={ thanksImage } />
		</BeBody>
	</PiecePage>
)

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', piecePageI18nNamespace )),
		}
	}
}

export default ComoEramOsAnimaisCordelChildrensBook