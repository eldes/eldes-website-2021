import { NextPage } from 'next'
import BeBody from '../components/BeBody'
import BeCredits from '../components/BeCredits'
import PiecePage from '../components/PiecePage'

const LimpidusWhiteboardAnimationPage: NextPage = () => {

	return (
		<PiecePage>
			<BeBody>
				<BeCredits clientName='Limpidus' work='storyboard, voice over direction, illustration, animation' />
			</BeBody>
		</PiecePage>
		
	)
}

export default LimpidusWhiteboardAnimationPage