import { FunctionComponent } from 'react'
import styles from '../styles/BePhotoGrid.module.scss'
import { BeImageData } from './BeBody'
import BeComponent, { beComponentDefaultProps, BeComponentProps } from './BeComponent'
import BeImage from './BeImage'

type Props = BeComponentProps & {
	images: BeImageData[]
	cols: number
	cellBackgroundColor?: string
}

const BePhotoGrid: FunctionComponent<Props> = ({ fill, foregroundColor, backgroundColor, horizontalPadding, verticalPadding, images, cols, cellBackgroundColor }) => {
	return (
		<BeComponent
			subClassName={ styles.bePhotoGrid }
			fill={ fill }
			foregroundColor={ foregroundColor }
			backgroundColor={ backgroundColor }
			horizontalPadding={ horizontalPadding }
			verticalPadding={ verticalPadding }
		>
			<ul className={ styles['cols-' + Math.min(Math.max(cols, 1), 4)] }>
			{ images.map(image =>
				<li className={ styles.bePhotoGridItem } key={ image.src.src } style={{ backgroundColor: cellBackgroundColor }}><BeImage src={ image.src } alt={ image.alt } round={image.round} /></li>
			)}
			</ul>
		</BeComponent>
	)
}

BePhotoGrid.defaultProps = {
	cellBackgroundColor: beComponentDefaultProps.backgroundColor,
	...beComponentDefaultProps
}

export default BePhotoGrid