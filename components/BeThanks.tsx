import { Trans } from 'next-i18next'
import Image from 'next/image'
import { FunctionComponent } from 'react'
import styles from '../styles/BeThanks.module.scss'
import BeComponent, { beComponentDefaultProps, BeComponentProps } from './BeComponent'

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
			<p><Trans i18nKey="PiecePage:BeThanks.text">Thanks for taking a look at my work!</Trans></p>
		</BeComponent>
	)
}

BeThanks.defaultProps = {
	...beComponentDefaultProps
}

export default BeThanks