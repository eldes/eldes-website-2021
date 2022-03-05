import { NextPage } from 'next'
import BeBody from '../components/BeBody'
import BeCredits from '../components/BeCredits'
import PiecePage from '../components/PiecePage'

const ProtestWhiteboardAnimationPage: NextPage = () => {

	return (
		<PiecePage>
			<BeBody>
				<BeCredits clientName='Resulta' work='storyboard, illustration' />
			</BeBody>
		</PiecePage>
	)
}

export default ProtestWhiteboardAnimationPage