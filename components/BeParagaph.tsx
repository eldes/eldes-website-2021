import { FunctionComponent, ReactNode } from 'react'
import styles from '../styles/BeParagraph.module.scss'
import BeComponent, { BeComponentDefaultProps, BeComponentProps } from './BeComponent'

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

const BeParagaph: FunctionComponent<Props> = ({ fill, foregroundColor, backgroundColor, align, children }) => {

	return (
		<BeComponent subClassName={ styles.beParagraph } fill={ fill } foregroundColor={ foregroundColor } backgroundColor={ backgroundColor }>
			<p style={{ color: foregroundColor, textAlign: align }}>
				{ children }
			</p>
		</BeComponent>
	)
}

BeParagaph.defaultProps = {
	align: BeParagaphAlign.Left,
	...BeComponentDefaultProps
}

export default BeParagaph