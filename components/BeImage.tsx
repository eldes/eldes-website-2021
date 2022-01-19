import { FunctionComponent } from 'react'
import Image from 'next/image'
import { BeImageData } from './BeBody'
import BeComponent, { BeComponentDefaultProps, BeComponentProps } from './BeComponent'
import styles from '../styles/BeImage.module.scss'

type Props = BeComponentProps & BeImageData

const BeImage: FunctionComponent<Props> = ({ fill, foregroundColor, backgroundColor, src, alt }) => {
	return (
		<BeComponent subClassName={ styles.beImage } fill={ fill } foregroundColor={ foregroundColor } backgroundColor={ backgroundColor }>
			<Image
				src={ src }
				alt={ alt }
				layout={ fill ? 'responsive' : 'intrinsic' }
			/>
		</BeComponent>
	)
}

BeImage.defaultProps = {
	...BeComponentDefaultProps
}

export default BeImage