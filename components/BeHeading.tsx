import { FunctionComponent, ReactNode } from 'react'
import BeComponent, { BeComponentProps } from './BeComponent'
import styles from '../styles/BeHeading.module.scss'

type Props =  BeComponentProps & {
	children: ReactNode
}

const BeHeading: FunctionComponent<Props> = ({ children, backgroundColor, color }) => {
	return (
		<BeComponent backgroundColor={ backgroundColor } color={ color }>
			<h2 className={ styles.beHeading }>{ children }</h2>
		</BeComponent>
	)
}

export default BeHeading