import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import BeHeading from '../components/BeHeading'
import BeImage from '../components/BeImage'
import BeLicenseTable from '../components/BeLicenseTable'
import BeMenu from '../components/BeMenu'
import BeParagaph from '../components/BeParagaph'
import FontBePage, { fontPageI18nNamespace } from '../components/FontBePage'
import accentsImage from '../public/content/font-eldes-cordel/font-eldes-cordel--accents.png'
import lettersDigitsImage from '../public/content/font-eldes-cordel/font-eldes-cordel--letters-and-digits.png'
import punctuationImage from '../public/content/font-eldes-cordel/font-eldes-cordel--punctuation-marks.png'
import posterImage from '../public/content/font-eldes-cordel/font-eldes-cordel-poster.jpg'
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
			<BeImage
				src={ posterImage }
				alt='Sample poster'
			/>
		</section>
		<section id='characters'>
			<BeHeading>Characters</BeHeading>
			<BeImage
				src={ lettersDigitsImage }
				alt={ 'Letters and digits' }
				backgroundColor='#ff69a1'
				horizontalPadding
			/>
			<BeImage
				src={ accentsImage }
				alt={ 'Accents' }
				backgroundColor='#00a99d'
				horizontalPadding
			/>
			<BeImage
				src={ punctuationImage }
				alt={ 'Symbols' }
				backgroundColor='#22b573'
				horizontalPadding
			/>
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