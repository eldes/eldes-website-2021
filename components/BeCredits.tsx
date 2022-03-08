import { Trans } from 'next-i18next'
import { FunctionComponent } from 'react'
import styles from '../styles/BeCredits.module.scss'
import BeComponent from './BeComponent'

type Props = {
	clientName?: string
	work?: string
}

const BeCredits: FunctionComponent<Props> = ({ clientName, work, children }) => {
	return (
		<BeComponent>
			<p className={ styles.beCredits }>
				<span className={ styles.label }><Trans i18nKey="PiecePage:BeCredits.client">Client</Trans>:</span> { clientName }<br/>
				<span className={ styles.label }><Trans i18nKey="PiecePage:BeCredits.work">Work</Trans>:</span> { work }
				{
					children && <span className={ styles.notes }>{ children }</span>
				}
			</p>
		</BeComponent>
	)
}

export default BeCredits