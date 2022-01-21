import { FunctionComponent, ReactNode } from 'react'
import styles from '../styles/BeBody.module.scss'

type Props = {
	children: ReactNode
}

export type BeImageData = {
	src: StaticImageData,
	alt: string,
}

const BeBody: FunctionComponent<Props> = ({ children }) => {
	return <div className={ styles.beBody }>{ children }</div>
}

export default BeBody