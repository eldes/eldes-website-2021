import { StaticImageData } from 'next/image';
import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type BeImageData = {
	src: StaticImageData
	width?: number
	height?: number
	alt: string
	round?: boolean
}

type Props = {
	backgroundColor?: string;
	foregroundColor?: string;
	children: ReactNode;
}

const BeBody: FC<Props> = (props) => {
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