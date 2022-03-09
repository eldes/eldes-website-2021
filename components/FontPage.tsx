import { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import fontsRepository from '../repositories/fonts-repository'
import Page, { PageSection } from './Page'

const FontPage: NextPage = ({ children }) => {

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
		<Page
			pretitle={ tp('pretitle', 'Font Eldes') }
			title={ font?.name ?? '' }
			section={ PageSection.Fonts }
			backwardLink={ backwardLink }
		>
			{ children }
		</Page>
	)
}

export default FontPage

export const fontPageI18nNamespace = ['common', 'Page', 'fonts', 'FontPage']