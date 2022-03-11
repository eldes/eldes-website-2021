import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import fontsRepository from '../repositories/fonts-repository'
import BePage, { bePageI18nNamespace } from './BePage'
import { PageSection } from './Page'

const FontBePage: FunctionComponent = ({ children }) => {

	const { asPath } = useRouter()
	const slug = asPath.substring(1)

	const font = fontsRepository.load(slug)

	const { t: tc } = useTranslation('common')
	const { t: tp } = useTranslation('FontPage')

	const backwardLink = {
		text: tc('Sections.fonts', 'Fonts'),
		href: '/fonts',
	}

	return (
		<BePage
			pretitle={ tp('pretitle', 'Font Eldes') }
			title={ font?.name ?? '' }
			section={ PageSection.Fonts }
			backwardLink={ backwardLink }
		>
			{ children }
		</BePage>
	)
}

export default FontBePage
export const fontPageI18nNamespace = [...bePageI18nNamespace, 'fonts', 'FontBePage']