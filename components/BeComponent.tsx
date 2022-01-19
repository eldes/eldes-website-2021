import { FunctionComponent, ReactNode } from 'react'
import styles from '../styles/BeComponent.module.scss'

export type BeComponentProps = {
	subClassName?: string
	fill?: boolean
	backgroundColor?: string
	foregroundColor?: string
}

export const BeComponentDefaultProps = {
	fill: false,
	backgroundColor: '#fff',
	foregroundColor: '#000',
}

const BeComponent: FunctionComponent<BeComponentProps & { children: ReactNode }> = ({ subClassName, children, fill, foregroundColor, backgroundColor }) => {
	let style = {}

	if (fill) {
		style = { ...style, padding: 0 }
	}

	if (foregroundColor) {
		style = {...style, color: foregroundColor }
	}

	if (backgroundColor) {
		style = { ...style, backgroundColor: backgroundColor }
	}

	return (
		<div className={ `${styles.beComponent} ${subClassName}` } style={ style }
		>{ children }</div>
	)
}

BeComponent.defaultProps = BeComponentDefaultProps

export default BeComponent