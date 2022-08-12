import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import fontsRepository from '../repositories/fonts-repository';
import BePage, { bePageI18nNamespace, BePageProps } from './BePage';
import { PageSection } from './Page';

type Props = Omit<BePageProps, 'pretitle' | 'title' | 'section' | 'backwardLink'>;

const FontBePage: FunctionComponent<Props> = (props) => {

	const { pathname } = useRouter()
	const slug = pathname.substring(1).split('#')[0]

	const font = fontsRepository.load(slug)

	const { t: tc } = useTranslation('common')
	const { t: tp } = useTranslation(fontBePageI18nKey)

	const backwardLink = {
		text: tc('Sections.fonts', 'Fonts'),
		href: '/fonts',
	}

	return (
		<BePage
			pretitle={ tp('pretitle', 'Font Eldes') }
			title={ font?.name ?? '' }
			subtitle={props.subtitle}
			description={props.description}
			section={ PageSection.Fonts }
			backwardLink={ backwardLink }
			backgroundColor={props.backgroundColor}
			foregroundColor={props.foregroundColor}
			seeMoreList={props.seeMoreList}
		>
			{ props.children }
		</BePage>
	)
}

export default FontBePage
export const fontBePageI18nKey = 'FontBePage'
export const fontBePageI18nNamespace = [...bePageI18nNamespace, 'fonts', fontBePageI18nKey]