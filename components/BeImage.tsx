import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import styles from '../styles/BeImage.module.scss'
import { BeImageData } from './BeBody'
import BeComponent, { beComponentDefaultProps, BeComponentProps } from './BeComponent'

type Props = BeComponentProps & BeImageData

const BeImage: FunctionComponent<Props> = ({ fill, foregroundColor, backgroundColor, horizontalPadding, verticalPadding, src, width, height, alt, round }) => {
	const className = round ? `${styles.beImage} ${styles.round}` : styles.beImage

	return (
		<BeComponent
			subClassName={ className }
			fill={ fill }
			foregroundColor={ foregroundColor }
			backgroundColor={ backgroundColor }
			horizontalPadding={ horizontalPadding }
			verticalPadding={ verticalPadding }
		>
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
	...beComponentDefaultProps
}

export default BeImage