import { NextPage } from 'next'
import JobList from '../components/JobList'
import Page, { PageSection } from '../components/Page'
import Job from '../model/Job'

import brasilNaBagagemThumbnail from '../public/content/brasil-na-bagagem-textbook-illustrations/thumbnail.jpg'
import ajudaris20Thumbnail from '../public/content/ajudaris-20-childrens-book-illustrations/thumbnail.jpg'
import ajudaris17Thumbnail from '../public/content/ajudaris-17-childrens-book-illustrations/thumbnail.jpg'

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
		thumbnail: brasilNaBagagemThumbnail,
		link: '/brasil-na-bagagem-textbook-illustrations',
	},
	{
		title: 'Histórias da Ajudaris\'20',
		subtitle: 'children\'s book illustrations',
		thumbnail: ajudaris20Thumbnail,
		link: '/historias-da-ajudaris-childrens-book-illustrations',
	},
	{
		title: 'Histórias da Ajudaris\'17',
		subtitle: 'children\'s book illustrations',
		thumbnail: ajudaris17Thumbnail,
		link: '/brasil-na-bagagem-textbook-illustrations',
	},
]

export default ChildrensBooksAndTextbooksPage