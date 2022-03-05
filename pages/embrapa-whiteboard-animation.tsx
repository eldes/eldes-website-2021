import { NextPage } from 'next'
import BeBody from '../components/BeBody'
import BeCredits from '../components/BeCredits'
import PiecePage from '../components/PiecePage'

const EmbrapaWhiteboardAnimationPage: NextPage = () => {

	return (
		<PiecePage>
			<BeBody>
				<BeCredits clientName='Embrapa' work='illustration' />
			</BeBody>
		</PiecePage>
	)
}

export default EmbrapaWhiteboardAnimationPage