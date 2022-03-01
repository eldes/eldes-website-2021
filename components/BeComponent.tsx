import { FunctionComponent, ReactNode } from 'react'
import styles from '../styles/BeComponent.module.scss'

export type BeComponentProps = {
	subClassName?: string
	fill?: boolean
	backgroundColor?: string
	foregroundColor?: string
	horizontalPadding?: boolean
}

export const BeComponentDefaultProps: BeComponentProps = {
	fill: false,
	backgroundColor: '#fff',
	foregroundColor: '#000',
	horizontalPadding: false,
}

const BeComponent: FunctionComponent<BeComponentProps & { children: ReactNode }> = ({ subClassName, children, fill, foregroundColor, backgroundColor, horizontalPadding }) => {
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

	if (horizontalPadding) {
		style = { ...style, paddingTop: '16px', paddingBottom: '16px' }
	}

	return (
		<div className={ `${styles.beComponent} ${subClassName}` } style={ style }
		>{ children }</div>
	)
}

BeComponent.defaultProps = BeComponentDefaultProps

export default BeComponent