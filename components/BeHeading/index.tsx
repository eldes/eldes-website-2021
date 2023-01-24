import { FunctionComponent, ReactNode } from 'react';
import BeComponent, { beComponentDefaultProps, BeComponentProps } from '../BeComponent';
import styles from './styles.module.scss';

type Props =  BeComponentProps & {
	children: ReactNode
}

const BeHeading: FunctionComponent<Props> = ({ fill, foregroundColor, backgroundColor, horizontalPadding, verticalPadding, children }) => {
	return (
		<BeComponent
			subClassName={ styles.beHeading }
			fill={ fill }
			foregroundColor={ foregroundColor }
			backgroundColor={ backgroundColor }
			horizontalPadding={ horizontalPadding }
			verticalPadding={ verticalPadding }
		>
			<h2>{ children }</h2>
		</BeComponent>
	)
}

BeHeading.defaultProps = {
	...beComponentDefaultProps
}

export default BeHeading