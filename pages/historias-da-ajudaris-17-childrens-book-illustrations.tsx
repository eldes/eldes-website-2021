import { NextPage } from 'next'
import BeBody from '../components/BeBody'
import BeImage from '../components/BeImage'
import BeParagaph, { BeParagaphAlign } from '../components/BeParagaph'
import PiecePage from '../components/PiecePage'

import familiaImage from '../public/content/ajudaris-17-childrens-book-illustrations/a-familia.jpg'
import mockupImage from '../public/content/ajudaris-17-childrens-book-illustrations/mockup.jpg'
import familiaMockupImage from '../public/content/ajudaris-17-childrens-book-illustrations/a-familia-mockup.jpg'
import aniversarioMockupImage from '../public/content/ajudaris-17-childrens-book-illustrations/aniversario-terrivel-mockup.jpg'
import aniversarioImage from '../public/content/ajudaris-17-childrens-book-illustrations/aniversario-terrivel.jpg'
import BeCredits from '../components/BeCredits'

const HistoriasDaAjudaris17ChildrensBookIllustrationsPage: NextPage = () => {

	return (
		<PiecePage>
			<BeBody>
				<BeImage
					src={familiaImage}
					alt={'Illustration for "A família"'}
				/>
				<BeCredits
					clientName="Ajudaris"
					work="illustrations"
				/>
				<BeParagaph>
					&quot;Histórias da Ajudaris&quot; (<em>&quot;Ajudaris&apos;s Stories&quot;</em>) is a collaborative book with multiple stories written by children from many public schools around Portugal.
				</BeParagaph>
				<BeImage
					src={mockupImage}
					alt={'Digital mockup of book'}
				/>
				<BeParagaph>
				In this edition I illustrated 2 stories: &quot;A fam&iacute;lia&quot; (<em>&quot;The family&quot;</em>), and &quot;O anivers&aacute;rio terr&iacute;vel&quot; (<em>&quot;The terrible birthday&quot;</em>).
				</BeParagaph>
				<BeImage
					src={familiaMockupImage}
					alt={'Digital mockup of book'}
				/>
				<BeImage
					src={aniversarioMockupImage}
					alt={'Digital mockup of book'}
				/>
				<BeImage
					src={aniversarioImage}
					alt={'Illustration for "O aniversário terrível"'}
					horizontalPadding={ true }
				/>
				
				<BeParagaph align={ BeParagaphAlign.Center }>
					Thanks for taking a look at my work!
				</BeParagaph>
			</BeBody>
		</PiecePage>
	)
}

export default HistoriasDaAjudaris17ChildrensBookIllustrationsPage