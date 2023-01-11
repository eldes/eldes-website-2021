import { FunctionComponent, ReactNode } from 'react';
import BeComponent, { beComponentDefaultProps, BeComponentProps } from '../BeComponent';
import styles from './styles.module.scss';

type Props = BeComponentProps & {
	align?: BeParagaphAlign
	children: ReactNode
}

export enum BeParagaphAlign {
	Left = 'left',
	Center = 'center',
	Right = 'right',
	Justify = 'justify',
}

const BeParagaph: FunctionComponent<Props> = ({ fill, foregroundColor, backgroundColor, horizontalPadding, verticalPadding, align, children }) => {

	return (
		<BeComponent
			subClassName={ styles.beParagraph }
			fill={ fill }
			foregroundColor={ foregroundColor }
			backgroundColor={ backgroundColor }
			horizontalPadding={ horizontalPadding }
			verticalPadding={ verticalPadding }
		>
			<p style={{ color: foregroundColor, textAlign: align }}>
				{ children }
			</p>
		</BeComponent>
	)
}

BeParagaph.defaultProps = {
	align: BeParagaphAlign.Left,
	...beComponentDefaultProps
}

export default BeParagaph