import { NextPage } from 'next'
import Page, { PageSection } from '../components/Page'

const ProtestWhiteboardAnimationPage: NextPage = () => {

	const backwardLink = {
		text: 'Animation and flip book',
		href: '/animation',	
	}

	return (
		<Page title="Protest" subtitle="whiteboard animation" section={ PageSection.Portfolio }  backwardLink={ backwardLink }>
		</Page>
	)
}

export default ProtestWhiteboardAnimationPage