import { FunctionComponent } from 'react'
import BeComponent from './BeComponent'
import styles from '../styles/BeCredits.module.scss'

type Props = {
	clientName?: string
	work?: string
}

const BeCredits: FunctionComponent<Props> = ({ clientName, work }) => {
	return (
		<BeComponent>
			<p className={ styles.beCredits }>
				<span className={ styles.label }>Client:</span> { clientName }<br/>
				<span className={ styles.label }>Work:</span> { work }
			</p>
		</BeComponent>
	)
}

export default BeCredits