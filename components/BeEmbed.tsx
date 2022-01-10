import { FunctionComponent, ReactNode } from 'react'
import BeComponent, { BeComponentProps } from './BeComponent'
import styles from '../styles/BeEmbed.module.scss'

type Props = BeComponentProps & {
	aspectRatioPercent: number
	children: ReactNode
}

const BeEmbed: FunctionComponent<Props> = ({ aspectRatioPercent, children, backgroundColor, color }) => {
	return (
		<BeComponent backgroundColor={backgroundColor} color={color}>
			<div className={ styles.beEmbed } style={{ paddingTop: `${aspectRatioPercent}%` }}>
				{children}
			</div>
		</BeComponent>
	)
}

export default BeEmbed