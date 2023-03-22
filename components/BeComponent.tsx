import { FC, ReactNode } from 'react'
import styles from '../styles/BeComponent.module.scss'

type Props = {
	subClassName?: string;
	fill?: boolean;
	backgroundColor?: string;
	foregroundColor?: string;
	horizontalPadding?: boolean;
	verticalPadding?: boolean;
	children?: ReactNode;
}

const defaultProps: Props = {
	fill: false,
	backgroundColor: 'inherit',
	foregroundColor: 'inherit',
	horizontalPadding: false,
	verticalPadding: false,
}

const BeComponent: FC<Props> = (props) => {
	let style = {}

	if (props.fill) {
		style = { ...style, padding: 0 }
	}

	if (props.foregroundColor) {
		style = {...style, color: props.foregroundColor }
	}

	if (props.backgroundColor) {
		style = { ...style, backgroundColor: props.backgroundColor }
	}

	if (props.horizontalPadding) {
		style = { ...style, paddingTop: 16, paddingBottom: 16 }
	}

	if (props.verticalPadding) {
		style = { ...style, paddingLeft: 32, paddingRight: 32 }
	}

	return (
		<div className={ `${styles.beComponent} ${props.subClassName}` } style={ style }
		>{ props.children }</div>
	)
}

BeComponent.defaultProps = defaultProps

export default BeComponent
export {
	type Props as BeComponentProps,
	defaultProps as beComponentDefaultProps
}