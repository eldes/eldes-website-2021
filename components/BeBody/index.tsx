import { StaticImageData } from 'next/image';
import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

type BeImageData = {
	src: StaticImageData
	width?: number
	height?: number
	alt: string
	round?: boolean
}

type Props = {
	backgroundColor?: string,
	foregroundColor?: string,
}

const BeBody: FunctionComponent<Props> = (props) => {
	return (
		<div
			className={ styles.beBody }
			style={{
				backgroundColor: props.backgroundColor,
				color: props.foregroundColor,
			}}
		>
			{ props.children }
		</div>
	)
}

export default BeBody
export type {
	BeImageData,
	Props as BeBodyProps
}