import { NextPage } from 'next'
import Page, { PageSection } from '../components/Page'

const LimpidusWhiteboardAnimationPage: NextPage = () => {

	const backwardLink = {
		text: 'Animation and flip book',
		href: '/animation',	
	}

	return (
		<Page title="Limpidus" subtitle="whiteboard animation" section={ PageSection.Portfolio }  backwardLink={ backwardLink }>
		</Page>
	)
}

export default LimpidusWhiteboardAnimationPage