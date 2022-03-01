import { FunctionComponent, ReactNode } from 'react'
import BeComponent, { BeComponentDefaultProps, BeComponentProps } from './BeComponent'
import styles from '../styles/BeHeading.module.scss'

type Props =  BeComponentProps & {
	children: ReactNode
}

const BeHeading: FunctionComponent<Props> = ({ fill, foregroundColor, backgroundColor, horizontalPadding, children }) => {
	return (
		<BeComponent subClassName={ styles.beHeading } fill={ fill } foregroundColor={ foregroundColor } backgroundColor={ backgroundColor } horizontalPadding={ horizontalPadding }>
			<h2>{ children }</h2>
		</BeComponent>
	)
}

BeHeading.defaultProps = {
	...BeComponentDefaultProps
}

export default BeHeading