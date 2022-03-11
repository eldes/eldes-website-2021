import { NextPage } from 'next'
import BeBody from './BeBody'
import Page, { PageProps } from './Page'

type Props = PageProps

const BePage: NextPage<Props> = ({ pretitle, title, subtitle, description, section, backwardLink, children }) => (
	<Page
		pretitle={ pretitle }
		title={ title }
		subtitle={ subtitle }
		description={ description }
		section={ section }
		backwardLink={ backwardLink }
	>
		<BeBody>
			{ children }
		</BeBody>
	</Page>
)

export default BePage

export const bePageI18nNamespace = ['common', 'Page']