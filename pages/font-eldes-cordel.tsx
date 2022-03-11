import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import BeBody from '../components/BeBody'
import BeHeading from '../components/BeHeading'
import BeImage from '../components/BeImage'
import BeLicenseTable from '../components/BeLicenseTable'
import BeMenu from '../components/BeMenu'
import BeParagaph from '../components/BeParagaph'
import BePhotoGrid from '../components/BePhotoGrid'
import FontBePage, { fontPageI18nNamespace } from '../components/FontBePage'
import accentsImage from '../public/content/font-eldes-cordel/font-eldes-cordel--accents.png'
import lettersDigitsImage from '../public/content/font-eldes-cordel/font-eldes-cordel--letters-and-digits.png'
import sample1Image from '../public/content/font-eldes-cordel/font-eldes-cordel-sample-1-en.png'

const FontEldesCordelPage: NextPage = () => (
	<FontBePage>
		<BeImage src={sample1Image} alt={'Sample of use'} />
		<BeMenu links={[
			{
				text: 'Details',
				id: 'details'
			},
			{
				text: 'Characters',
				id: 'characters'
			},
			{
				text: 'Buy',
				id: 'buy'
			},
		]} />
		<section id="details">
			<BeHeading>Details</BeHeading>
			<BeParagaph>
				Inspirada diretamente na xilogravura — em especial nas capas dos folhetos de literatura de cordel — e criada principalmente para compor peças gráficas que tenham a cultura brasileira como referência e que queiram transmitir o conceito de “feito a mão”, a fonte Eldes Cordel traz algumas das características visuais dessa técnica de impressão, como as falhas e imprecisões do entalhe na matriz de madeira.
			</BeParagaph>
		</section>
		<section id='characters'>
			<BeHeading>Characters</BeHeading>
			<BePhotoGrid images={[
				{
					src: lettersDigitsImage,
					alt: 'Letras e Algarismos',
				},
				{
					src: accentsImage,
					alt: 'Acentuação',
				},
			]} cols={1} />
		</section>
		<section id='buy'>
			<BeHeading>Buy</BeHeading>
			<BeLicenseTable verticalPadding={true} horizontalPadding={true} />
		</section>
	</FontBePage>
)

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', fontPageI18nNamespace)),
		}
	}
}

export default FontEldesCordelPage