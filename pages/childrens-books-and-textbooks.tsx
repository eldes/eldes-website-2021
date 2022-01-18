import { NextPage } from 'next'
import Link from 'next/link'
import Page, { PageSection } from '../components/Page'

const ChildrensBooksAndTextbooksPage: NextPage = () => {
	return (
		<Page title="Children's Books and Textbooks" section={PageSection.Portfolio}>
			<Link href="/brasil-na-bagagem-textbook-illustrations"><a >Brasil na Bagagem textbook illustrations</a></Link>
		</Page>
	)
}

export default ChildrensBooksAndTextbooksPage