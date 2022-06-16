import { NextPage } from 'next';
import BeBody, { BeBodyProps } from './BeBody';
import Page, { PageProps } from './Page';

type Props = PageProps & BeBodyProps

const BePage: NextPage<Props> = (props) => (
	<Page
		pretitle={ props.pretitle }
		title={ props.title }
		subtitle={ props.subtitle }
		description={ props.description }
		section={ props.section }
		backwardLink={ props.backwardLink }
	>
		<BeBody
			backgroundColor={ props.backgroundColor }
			foregroundColor={ props.foregroundColor }
		>
			{ props.children }
		</BeBody>
	</Page>
)

export default BePage
export type { 
	Props as BePageProps
}
export const bePageI18nNamespace = ['common', 'Page']