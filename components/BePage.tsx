import BeBody, { BeBodyProps } from './BeBody';
import BeSeeMorePanel, { BeSeeMorePanelProps } from './BeSeeMorePanel';
import Page, { PageProps } from './Page';
import { FC } from 'react';

type Props = PageProps & BeBodyProps & BeSeeMorePanelProps;

const BePage: FC<Props> = (props) => {
	return (
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
			<BeSeeMorePanel seeMoreList={props.seeMoreList} />
		</Page>
	);
}
	

export default BePage
export type { 
	Props as BePageProps
}
export const bePageI18nNamespace = ['common', 'Page']