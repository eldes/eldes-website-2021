import { NextPage } from 'next'
import JobsList from '../components/JobsList'
import Page, { PageSection } from '../components/Page'

const ChildrensBooksAndTextbooksPage: NextPage = () => {

	const backwardLink = {
		text: 'Portfolio',
		href: '/portfolio',	
	}

	return (
		<Page title="Children's Books and Textbooks" section={ PageSection.Portfolio } backwardLink={ backwardLink }>
			<JobsList />
		</Page>
	)
}

export default ChildrensBooksAndTextbooksPage