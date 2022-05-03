import { Trans } from 'next-i18next'
import { FunctionComponent } from 'react'
import styles from '../styles/BeCredits.module.scss'
import BeComponent, { BeComponentProps } from './BeComponent'

type Props = BeComponentProps & {
	clientName?: string
	work?: string
}

const BeCredits: FunctionComponent<Props> = ({ clientName, work, subClassName, fill, foregroundColor, backgroundColor, horizontalPadding, verticalPadding, children }) => {
	return (
		<BeComponent
			subClassName={ subClassName }
			fill={ fill }
			foregroundColor={ foregroundColor }
			backgroundColor={ backgroundColor }
			horizontalPadding={ horizontalPadding }
			verticalPadding={ verticalPadding }
		>
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