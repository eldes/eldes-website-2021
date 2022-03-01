import { NextPage } from 'next'
import Page, { PageSection } from '../components/Page'

const AboutPage: NextPage = () => {
	return (
		<Page title="About" section={PageSection.About}>
		</Page>
	)
}

export default AboutPage