import { FunctionComponent, ReactNode } from 'react'
import styles from '../styles/BeEmbed.module.scss'
import BeComponent, { BeComponentProps } from './BeComponent'

type Props = BeComponentProps & {
	aspectRatioPercent: number
	children: ReactNode
}

const BeEmbed: FunctionComponent<Props> = ({ fill, foregroundColor, backgroundColor, horizontalPadding, verticalPadding, aspectRatioPercent, children }) => {
	return (
		<BeComponent
			subClassName={ styles.beEmbed }
			fill={ fill }
			foregroundColor={ foregroundColor }
			backgroundColor={ backgroundColor }
			horizontalPadding={ horizontalPadding }
			verticalPadding={ verticalPadding }
		>
			<div style={{ paddingTop: `${aspectRatioPercent}%` }}>
				{children}
			</div>
		</BeComponent>
	)
}

export default BeEmbed