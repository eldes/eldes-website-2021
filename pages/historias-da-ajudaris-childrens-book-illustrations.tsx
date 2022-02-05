import { NextPage } from 'next'
import BeBody from '../components/BeBody'
import BeHeading from '../components/BeHeading'
import BeParagaph, { BeParagaphAlign } from '../components/BeParagaph'
import Page, { PageSection } from '../components/Page'

const HistoriasDaAjudaris20ChildrensBookIllustrationsPage: NextPage = () => {
	const backwardLink = {
		text: 'Children\'s books and textbooks',
		href: '/childrens-books-and-textbooks',	
	}

	return (
		<Page
			title="Histórias da Ajudaris'20"
			subtitle="children's book illustrations"
			section={PageSection.Portfolio}
			backwardLink={ backwardLink }
		>
			<BeBody>
				<BeParagaph>
					&quot;Histórias da Ajudaris&quot; (<em>&quot;Ajudaris&apos;s Stories&quot;</em>) is a collaborative book with multiple stories written by children from many public schools around Portugal.
				</BeParagaph>
				<BeHeading>The process</BeHeading>
				<BeParagaph align={ BeParagaphAlign.Center }>
					Thanks for taking a look at my work!
				</BeParagaph>
			</BeBody>
		</Page>
	)
}

export default HistoriasDaAjudaris20ChildrensBookIllustrationsPage