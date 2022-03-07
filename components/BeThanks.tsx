import Image from 'next/image'
import { FunctionComponent } from 'react'
import styles from '../styles/BeThanks.module.scss'
import BeComponent, { BeComponentDefaultProps, BeComponentProps } from './BeComponent'

type Props =  BeComponentProps & {
	image?: StaticImageData
}

const BeThanks: FunctionComponent<Props> = ({ fill, foregroundColor, backgroundColor, horizontalPadding, image }) => {
	return (
		<BeComponent
			subClassName={ styles.beThanks }
			fill={ fill }
			foregroundColor={ foregroundColor }
			backgroundColor={ backgroundColor }
			horizontalPadding={ horizontalPadding }
		>
		{
			image && <Image
				src={ image.src }
				alt='Obrigado!'
				width={ image.width }
				height={ image.height }
				layout="intrinsic"
			/>
		}
			
			<p>Obrigado por dar uma olhada no meu trabalho!</p>
			{/* <p>Thanks for taking a look at my work!</p> */}
		</BeComponent>
	)
}

BeThanks.defaultProps = {
	...BeComponentDefaultProps
}

export default BeThanks