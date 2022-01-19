import { FunctionComponent, ReactNode } from 'react'
import BeComponent, { BeComponentDefaultProps, BeComponentProps } from './BeComponent'
import styles from '../styles/BeHeading.module.scss'

type Props =  BeComponentProps & {
	children: ReactNode
}

const BeHeading: FunctionComponent<Props> = ({ fill, foregroundColor, backgroundColor, children }) => {
	return (
		<BeComponent subClassName={ styles.beHeading } fill={ fill } foregroundColor={ foregroundColor } backgroundColor={ backgroundColor }>
			<h2>{ children }</h2>
		</BeComponent>
	)
}

BeHeading.defaultProps = {
	...BeComponentDefaultProps
}

export default BeHeading