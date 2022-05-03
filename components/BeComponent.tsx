import { FunctionComponent, ReactNode } from 'react'
import styles from '../styles/BeComponent.module.scss'

type Props = {
	subClassName?: string
	fill?: boolean
	backgroundColor?: string
	foregroundColor?: string
	horizontalPadding?: boolean
	verticalPadding?: boolean
}

const defaultProps: Props = {
	fill: false,
	backgroundColor: 'inherit',
	foregroundColor: 'inherit',
	horizontalPadding: false,
	verticalPadding: false,
}

const BeComponent: FunctionComponent<Props & { children: ReactNode }> = ({ subClassName, children, fill, foregroundColor, backgroundColor, horizontalPadding, verticalPadding }) => {
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
		style = { ...style, paddingTop: 16, paddingBottom: 16 }
	}

	if (verticalPadding) {
		style = { ...style, paddingLeft: 32, paddingRight: 32 }
	}

	return (
		<div className={ `${styles.beComponent} ${subClassName}` } style={ style }
		>{ children }</div>
	)
}

BeComponent.defaultProps = defaultProps

export default BeComponent
export {
	type Props as BeComponentProps,
	defaultProps as beComponentDefaultProps
}