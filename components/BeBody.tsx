import Link from 'next/link'
import { FunctionComponent } from 'react'
import styles from '../styles/BeBody.module.scss'

type BeImageData = {
	src: StaticImageData
	width?: number
	height?: number
	alt: string
	round?: boolean
}

const BeBody: FunctionComponent = ({ children }) => {
	return (
		<div className={ styles.beBody }>
			{ children }
		</div>
	)
}

export default BeBody
export type {
	BeImageData
}