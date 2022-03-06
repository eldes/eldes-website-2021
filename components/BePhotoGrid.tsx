import { FunctionComponent } from 'react'
import styles from '../styles/BePhotoGrid.module.scss'
import { BeImageData } from './BeBody'
import BeComponent, { BeComponentDefaultProps, BeComponentProps } from './BeComponent'
import BeImage from './BeImage'

type Props = BeComponentProps & {
	images: BeImageData[]
	cols: number
	cellBackgroundColor?: string
}

const BePhotoGrid: FunctionComponent<Props> = ({ fill, foregroundColor, backgroundColor, horizontalPadding, images, cols, cellBackgroundColor }) => {
	return (
		<BeComponent subClassName={ styles.bePhotoGrid } fill={ fill } foregroundColor={ foregroundColor } backgroundColor={ backgroundColor } horizontalPadding={ horizontalPadding }>
			<ul className={ styles['cols-' + Math.min(Math.max(cols, 1), 4)] }>
			{ images.map(image =>
				<li className={ styles.bePhotoGridItem } key={ image.src.src } style={{ backgroundColor: cellBackgroundColor }}><BeImage src={ image.src } alt={ image.alt } round={image.round} /></li>
			)}
			</ul>
		</BeComponent>
	)
}

BePhotoGrid.defaultProps = {
	cellBackgroundColor: BeComponentDefaultProps.backgroundColor,
	...BeComponentDefaultProps
}

export default BePhotoGrid