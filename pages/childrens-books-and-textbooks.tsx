import { NextPage } from 'next'
import JobList from '../components/JobList'
import Page, { PageSection } from '../components/Page'
import Job from '../model/Job'

import brasilNaBagagemTextbookIllustrationsHighlight from '../public/content/brasil-na-bagagem-textbook-illustrations/highlight.jpg'
import ajudarisChildrensBookIllustrationsHighlight from '../public/content/ajudaris-20-childrens-book-illustrations/highlight.jpg'

const ChildrensBooksAndTextbooksPage: NextPage = () => {

	const backwardLink = {
		text: 'Portfolio',
		href: '/portfolio',	
	}

	return (
		<Page title="Children's Books and Textbooks" section={ PageSection.Portfolio } backwardLink={ backwardLink }>
			<JobList jobs={ jobs }/>
		</Page>
	)
}

const jobs: Job[] = [
	{
		title: 'Brasil na Bagagem',
		subtitle: 'textbook illustrations',
		image: brasilNaBagagemTextbookIllustrationsHighlight,
	},
	{
		title: 'Histórias da Ajudaris\'20',
		subtitle: 'children\'s book illustrations',
		image: ajudarisChildrensBookIllustrationsHighlight,
	},
]

export default ChildrensBooksAndTextbooksPage