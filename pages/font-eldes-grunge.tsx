import { GetStaticProps, NextPage } from 'next';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import BeHeading from '../components/BeHeading';
import BeImage from '../components/BeImage';
import { beLicenseListI18n } from '../components/BeLicenseList';
import BeMenu from '../components/BeMenu';
import BeParagaph from '../components/BeParagraph';
import FontBePage, { fontBePageI18nKey, fontBePageI18nNamespace } from '../components/FontBePage';
import SwitchLocale from '../components/SwitchLocale';
import charsetBasicImage from '../public/content/font-eldes-grunge/eldes-grunge-basic-characters.png';
import posterDarkImage from '../public/content/font-eldes-grunge/font-eldes-grunge-poster-dark.jpg';

const FontEldesGrungePage: NextPage = () => {

	const { locale } = useRouter();
	const { t } = useTranslation()
	
	return (
		<FontBePage>
			<BeImage src={ posterDarkImage } alt={'Sample poster'} />
			<BeMenu links={[
				{
					text: t(`${fontBePageI18nKey}:Details.title`, 'Details'),
					id: t('FontBePage:Details.id', 'details')
				},
				{
					text: t(`${fontBePageI18nKey}:Characters.title`, 'Characters'),
					id: t('FontBePage:Characters.id', 'characters')
				},
			]} />
			<section id={t('FontBePage:Details.id', 'details') ?? 'details'}>
				<BeHeading><Trans i18nKey='FontBePage:Details.title'>Details</Trans></BeHeading>
				<SwitchLocale
					br={
						<BeParagaph>
							Fonte manuscrita, inspirada no material gráfico do rock dos anos 90.
						</BeParagaph>
					}
					en={
						<BeParagaph>
							Handwritten font, inspired by 90&apos;s rock graphic material.
						</BeParagaph>
					} />
			</section>
			
			<section id={t('FontBePage:Characters.id', 'characters') ?? 'characters'}>
				<BeHeading><Trans i18nKey='FontBePage:Characters.title'>Characters</Trans></BeHeading>
				<BeImage
					src={ charsetBasicImage }
					alt={ 'Letters and digits' }
					horizontalPadding
				/>
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

export default FontEldesGrungePage