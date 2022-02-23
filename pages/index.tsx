import type { NextPage } from 'next'
import Page, { PageSection } from '../components/Page'

const Home: NextPage = () => {
	return (
		<Page title="Homepage" section={ PageSection.Home } />
	)
}

export default Home