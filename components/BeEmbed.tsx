import { FunctionComponent, ReactNode } from 'react'
import BeComponent, { BeComponentProps } from './BeComponent'
import styles from '../styles/BeEmbed.module.scss'

type Props = BeComponentProps & {
	aspectRatioPercent: number
	children: ReactNode
}

const BeEmbed: FunctionComponent<Props> = ({ fill, foregroundColor, backgroundColor, horizontalPadding, aspectRatioPercent, children }) => {
	return (
		<BeComponent subClassName={ styles.beEmbed } fill={ fill } foregroundColor={ foregroundColor } backgroundColor={ backgroundColor } horizontalPadding={ horizontalPadding }>
			<div style={{ paddingTop: `${aspectRatioPercent}%` }}>
				{children}
			</div>
		</BeComponent>
	)
}

export default BeEmbed