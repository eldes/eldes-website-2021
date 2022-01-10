import { FunctionComponent, ReactNode } from 'react'
import styles from '../styles/BeComponent.module.scss'

export type BeComponentProps = {
	backgroundColor?: string
	color?: string
	fill?: boolean
}

const BeComponent: FunctionComponent<BeComponentProps & { children: ReactNode }> = ({ children, backgroundColor, color, fill }) => {
	return (
		<div className={ styles.beComponent } style={{
				backgroundColor: backgroundColor,
				color: color,
				padding: fill ? 0 : ''
			}}
		>{ children }</div>
	)
}

export default BeComponent