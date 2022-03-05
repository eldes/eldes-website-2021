import { NextPage } from 'next'
import BeBody from '../components/BeBody'
import BeCredits from '../components/BeCredits'
import PiecePage from '../components/PiecePage'

const BorealTextbookFlipBookPage: NextPage = () => {
	return (
		<PiecePage>
			<BeBody>
				<BeCredits
					clientName='Editora Boreal'
					work='storyboard and illustration'
				/>
			</BeBody>
		</PiecePage>
	)
}

export default BorealTextbookFlipBookPage