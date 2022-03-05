import { NextPage } from 'next'
import BeBody from '../components/BeBody'
import BeCredits from '../components/BeCredits'
import PiecePage from '../components/PiecePage'

const PenguinStoryFlipBookPage: NextPage = () => {
	return (
		<PiecePage>
			<BeBody>
				<BeCredits clientName='private' work='illustration' />
			</BeBody>
		</PiecePage>
	)
}

export default PenguinStoryFlipBookPage