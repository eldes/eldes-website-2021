import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import fontsRepository from '../repositories/fonts-repository';
import BePage, { bePageI18nNamespace, BePageProps } from './BePage';
import { PageSection } from './Page';
import Head from 'next/head';
import { Localizer } from '../models/Locale';

type Props = Omit<BePageProps, 'pretitle' | 'title' | 'section' | 'backwardLink'>;

const FontBePage: FunctionComponent<Props> = (props) => {

	const router = useRouter();
	const { pathname } = router;
	const slug = pathname.substring(1).split('#')[0];

	const font = fontsRepository.load(slug);

	const { t: tc } = useTranslation('common');
	const { t: tp } = useTranslation(fontBePageI18nKey);

	const backwardLink = {
		text: tc('Sections.fonts', 'Fonts'),
		href: '/fonts',
	}

	const localizer = Localizer.make(router);
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

	return (
		<>
			{(font) && (
				<BePage
					pretitle={ tp('pretitle', 'Font Eldes') ?? 'Font Eldes' }
					title={ font?.name ?? '' }
					subtitle={props.subtitle}
					description={localizer.getValue(font.description)}
					section={ PageSection.Fonts }
					backwardLink={ backwardLink }
					backgroundColor={props.backgroundColor}
					foregroundColor={props.foregroundColor}
					seeMoreList={props.seeMoreList}
				>
					<Head>
							<meta property="og:image" content={siteUrl + font.thumbnail} key="ogimage" />
							<meta property="og:image:width" content={'512'} key="ogimagewidth" />
							<meta property="og:image:height" content={'512'} key="ogimageheight" />
							<meta property="twitter:image" content={siteUrl + font.thumbnail} key="twitterimage" />
						</Head>	
					{ props.children }
				</BePage>
			)}
		</>
	)
}

export default FontBePage
export const fontBePageI18nKey = 'FontBePage'
export const fontBePageI18nNamespace = [...bePageI18nNamespace, 'fonts', fontBePageI18nKey]