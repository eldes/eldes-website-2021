import { GetStaticProps, NextPage } from 'next';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BeHeading from '../components/BeHeading';
import BeImage from '../components/BeImage';
import BeLicenseList, { beLicenseListI18n } from '../components/BeLicenseList';
import BeMenu from '../components/BeMenu';
import BeParagaph from '../components/BeParagaph';
import FontBePage, { fontBePageI18nKey, fontBePageI18nNamespace } from '../components/FontBePage';
import accentsImage from '../public/content/font-eldes-cordel/font-eldes-cordel--accents.png';
import lettersDigitsImage from '../public/content/font-eldes-cordel/font-eldes-cordel--letters-and-digits.png';
import punctuationImage from '../public/content/font-eldes-cordel/font-eldes-cordel--punctuation-marks.png';
import posterImage from '../public/content/font-eldes-cordel/font-eldes-cordel-poster.jpg';
import sample1Image from '../public/content/font-eldes-cordel/font-eldes-cordel-sample-1-en.png';

const FontEldesCordelPage: NextPage = () => {

	const { t } = useTranslation()
	
	return (
		<FontBePage>
			<BeImage src={sample1Image} alt={'Sample of use'} />
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
			<section id={t('FontBePage:Details.id', 'details')}>
				<BeHeading><Trans i18nKey='FontBePage:Details.title'>Details</Trans></BeHeading>
				<BeParagaph>
					<Trans i18nKey="font-eldes-cordel:details" >Font inspired directly in the woodcut — especially in the covers of the Cordel literature booklets — and originally created mainly to compose graphic pieces that have Brazilian culture as reference and or that want to transmit the concept of handmade, this type brings some of the visual characteristic of such printing technique, such as the gaps and inaccuracies of the notch in the wood matrix.</Trans>
				</BeParagaph>
				<BeImage
					src={ posterImage }
					alt='Sample poster'
				/>
			</section>
			<section id={t('FontBePage:Characters.id', 'characters')}>
				<BeHeading><Trans i18nKey='FontBePage:Characters.title'>Characters</Trans></BeHeading>
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
			<section id={t('FontBePage:Buy.id', 'buy')}>
				<BeHeading><Trans i18nKey='FontBePage:Buy.title'>Buy</Trans></BeHeading>
				<BeLicenseList verticalPadding={true} horizontalPadding={true} />
			</section>
		</FontBePage>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', [...fontBePageI18nNamespace, ...beLicenseListI18n, 'font-eldes-cordel'])),
		}
	}
}

export default FontEldesCordelPage