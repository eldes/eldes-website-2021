import { NextPage } from 'next'
import BeBody from '../components/BeBody'
import BeImage from '../components/BeImage'
import BeParagaph, { BeParagaphAlign } from '../components/BeParagaph'
import PiecePage from '../components/PiecePage'
import BePhotoGrid from '../components/BePhotoGrid'

import animaisCacadorImage from '../public/content/ajudaris-20-childrens-book-illustrations/os-animais-e-o-cacador.jpg'
import forestImage from '../public/content/ajudaris-20-childrens-book-illustrations/the-forest.jpg'
import roughImage from '../public/content/ajudaris-20-childrens-book-illustrations/rough.jpg'
import giraffeImage from '../public/content/ajudaris-20-childrens-book-illustrations/giraffe.jpg'
import coverImage from '../public/content/ajudaris-20-childrens-book-illustrations/cover.jpg'
import BeCredits from '../components/BeCredits'

const HistoriasDaAjudaris20ChildrensBookIllustrationsPage: NextPage = () => {

	return (
		<PiecePage>
			<BeBody>
			
				<BeImage
					src={animaisCacadorImage}
					alt={'Illustration for "Os animais e o caçador"'}
				/>
				<BeCredits
					clientName="Ajudaris"
					work="illustrations"
				/>
				<BeParagaph>
					&quot;Histórias da Ajudaris&quot; (<em>&quot;Ajudaris&apos;s Stories&quot;</em>) is a collaborative book with multiple stories written by children from many public schools around Portugal.
				</BeParagaph>
				<BeImage
					src={coverImage}
					alt={'Digital mockup of book'}
				/>
				<BeParagaph>
				In this edition I illustrated 2 stories.
				</BeParagaph>
				<BeImage
					src={forestImage}
					alt={'Illustration for "A florestas"'}
					horizontalPadding={ true }
				/>
				<BePhotoGrid images={[
					{
						src: roughImage,
						alt: 'Rough'
					},
					{
						src: animaisCacadorImage,
						alt: 'Illustration for "Os animais e o caçador"	'
					},
				]} cols={2}>
					
				</BePhotoGrid>
				
				<BeImage
					src={giraffeImage}
					width={112}
					height={246}
					alt={'Thanks!'}
				/>
				<BeParagaph align={ BeParagaphAlign.Center }>
					Thanks for taking a look at my work!
				</BeParagaph>
			</BeBody>
		</PiecePage>
	)
}

export default HistoriasDaAjudaris20ChildrensBookIllustrationsPage