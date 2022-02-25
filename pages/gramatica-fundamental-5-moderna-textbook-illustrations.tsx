import { NextPage } from 'next'
import Page, { PageSection } from '../components/Page'

const GramaticaFundamental5Page: NextPage = () => {
	const backwardLink = {
		text: 'Children\'s books and textbooks',
		href: '/childrens-books-and-textbooks',	
	}

	return (
		<Page title="Gramática Fundamental 5" subtitle="textbook illustrations" section={ PageSection.Portfolio }  backwardLink={ backwardLink }>
		</Page>
	)
}

export default GramaticaFundamental5Page