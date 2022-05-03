import { NextPage } from 'next'
import BePage from '../components/BePage'
import { PageSection } from '../components/Page'

const DesktopLicenseDetailsPage: NextPage = () => {
	return (
		<BePage
			title="Desktop License"
			section={PageSection.Fonts}
		>
			<p>teste</p>
		</BePage>
	)
}

export default DesktopLicenseDetailsPage