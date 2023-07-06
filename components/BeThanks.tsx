import Image, { StaticImageData } from 'next/image';
import { FunctionComponent } from 'react';
import styles from '../styles/BeThanks.module.scss';
import BeComponent, { beComponentDefaultProps, BeComponentProps } from './BeComponent';
import SwitchLocale from './SwitchLocale';

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
			<SwitchLocale en={
				<p>Thanks for taking a look at my work!</p>
			} br={
				<p>Obrigado por dar uma olhada no meu trabalho!</p>
			} />
			
		</BeComponent>
	)
}

BeThanks.defaultProps = {
	...beComponentDefaultProps
}

export default BeThanks