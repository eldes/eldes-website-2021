import { FunctionComponent } from 'react'
import Image from 'next/image'
import { BeImageData } from './BeBody'
import BeComponent, { BeComponentDefaultProps, BeComponentProps } from './BeComponent'
import styles from '../styles/BeImage.module.scss'
import Link from 'next/link'

type Props = BeComponentProps & BeImageData

const BeImage: FunctionComponent<Props> = ({ fill, foregroundColor, backgroundColor, src, width, height, alt }) => {
	return (
		<BeComponent subClassName={ styles.beImage } fill={ fill } foregroundColor={ foregroundColor } backgroundColor={ backgroundColor }>
			<Link href={src.src}>
			{
				fill ?
				<Image
					src={ src }
					alt={ alt }
					layout="responsive"
				/> :
				<Image
					src={ src }
					alt={ alt }
					width={ width }
					height={ height }
					layout="intrinsic"
				/>
			}
			</Link>
		</BeComponent>
	)
}

BeImage.defaultProps = {
	...BeComponentDefaultProps
}

export default BeImage