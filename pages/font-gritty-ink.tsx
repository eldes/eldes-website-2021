import { GetStaticProps, NextPage } from 'next';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import BeHeading from '../components/BeHeading';
import BeImage from '../components/BeImage';
import BeLicenseList, { beLicenseListI18n } from '../components/BeLicenseList';
import BeMenu from '../components/BeMenu';
import BeParagaph from '../components/BeParagraph';
import FontBePage, { fontBePageI18nKey, fontBePageI18nNamespace } from '../components/FontBePage';
import SwitchLocale from '../components/SwitchLocale';
import charsetBasicImage from '../public/content/font-gritty-ink/font-gritty-ink-basic-characters.png';
import posterDarkImage from '../public/content/font-gritty-ink/font-gritty-ink-poster-dark.jpg';
import posterGrungeImage from '../public/content/font-gritty-ink/font-gritty-ink-poster-grunge.jpg';
import posterHanselUndGretelImage from '../public/content/font-gritty-ink/font-gritty-ink-poster-hansel-und-gretel.jpg';
import posterComicsImage from '../public/content/font-gritty-ink/font-gritty-ink-poster-comics.png';
import posterLogotypeImage from '../public/content/font-gritty-ink/font-gritty-ink-poster-logotype.png';
import posterMultilingualImage from '../public/content/font-gritty-ink/font-gritty-ink-multilingual.jpg';
import BePhotoGrid from '../components/BePhotoGrid';

const FontGrittyInkPage: NextPage = () => {

	const { locale } = useRouter();
	const { t } = useTranslation()
	
	return (
		<FontBePage>
			<BeImage src={ posterGrungeImage } alt={'Sample poster'} />
			<BeMenu links={[
				{
					text: t(`${fontBePageI18nKey}:Details.title`, 'Details'),
					id: t('FontBePage:Details.id', 'details')
				},
				{
					text: t(`${fontBePageI18nKey}:Characters.title`, 'Characters'),
					id: t('FontBePage:Characters.id', 'characters')
				},
				{
					text: t(`${fontBePageI18nKey}:Buy.title`, 'Buy'),
					id: t('FontBePage:Buy.id', 'buy')
				},
			]} />
			<section id={t('FontBePage:Details.id', 'details') ?? 'details'}>
				<BeHeading><Trans i18nKey='FontBePage:Details.title'>Details</Trans></BeHeading>
				<SwitchLocale
					br={
						<BeParagaph>
							Apresentando Gritty Ink – uma fonte que exala rebeldia e desafio a cada traço, abraçando a energia crua do punk rock e a estética áspera do grunge dos anos 90 com sua tipografia autêntica e artesanal. Ela adiciona um toque ousado a qualquer peça gráfica, com bordas irregulares e linhas desiguais que capturam o espírito &ldquo;faça você mesmo&rdquo; dessas culturas. Combine-a com gráficos audaciosos e texturas desgastadas para um visual inconfundivelmente rebelde. Incluindo glifos alternativos e ligaduras, Gritty Ink oferece possibilidades diversas de personalização. Abrace o caos e libere sua criatividade com esta fonte ousada e desafiadora.
						</BeParagaph>
					}
					en={
						<BeParagaph>
							Introducing Gritty Ink – a font that screams rebellion and defiance with every stroke, embracing the raw energy of punk rock and the gritty aesthetic of 90&apos;s grunge with its authentic and handcrafted typography. It adds a bold touch to any graphic piece, with irregular edges and uneven lines that capture the DIY spirit of these cultures. Pair it with bold graphics and distressed textures for an unmistakably rebellious look. Including alternate glyphs and ligatures, Gritty Ink offers diverse customization possibilities. Embrace the chaos and unleash your creativity with this bold and defiant typeface.
						</BeParagaph>
					}
				/>
				<BePhotoGrid images={[
					{
						src: posterDarkImage,
						alt: 'Sample poster'
					},
					{
						src: posterHanselUndGretelImage,
						alt: 'Sample poster'
					},
					{
						src: posterComicsImage,
						alt: 'Sample poster'
					},
					{
						src: posterLogotypeImage,
						alt: 'Sample poster'
					},
				]} cols={2} />
			</section>
			
			<section id={t('FontBePage:Characters.id', 'characters') ?? 'characters'}>
				<BeHeading><Trans i18nKey='FontBePage:Characters.title'>Characters</Trans></BeHeading>
				<BeImage
					src={ charsetBasicImage }
					alt={ 'Letters and digits' }
					horizontalPadding
				/>
				<BeImage
					src={ posterMultilingualImage }
					alt={ 'Multilingual support' }
					horizontalPadding
					verticalPadding
				/>
			</section>
			<section id={t('FontBePage:Buy.id', 'buy') ?? 'buy'}>
				<BeHeading><Trans i18nKey='FontBePage:Buy.title'>Buy</Trans></BeHeading>
				<BeLicenseList verticalPadding={true} horizontalPadding={true} />
			</section>
		</FontBePage>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', [...fontBePageI18nNamespace, ...beLicenseListI18n])),
		}
	}
}

export default FontGrittyInkPage