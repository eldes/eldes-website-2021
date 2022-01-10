import { NextPage } from 'next'
import Page, { PageSection } from '../components/Page'

const ChildrensBooksAndTextbooksPage: NextPage = () => {
	return (
		<Page title="Children's Books and Textbooks" section={PageSection.Portfolio}>
			<a href="/brasil-na-bagagem-textbook-illustrations">Brasil na Bagagem textbook illustrations</a>
		</Page>
	)
}

export default ChildrensBooksAndTextbooksPage