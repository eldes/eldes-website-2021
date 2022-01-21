import { NextPage } from 'next'
import JobList from '../components/JobList'
import Page, { PageSection } from '../components/Page'

const ChildrensBooksAndTextbooksPage: NextPage = () => {

	const backwardLink = {
		text: 'Portfolio',
		href: '/portfolio',	
	}

	return (
		<Page title="Children's Books and Textbooks" section={ PageSection.Portfolio } backwardLink={ backwardLink }>
			<JobList />
		</Page>
	)
}

export default ChildrensBooksAndTextbooksPage