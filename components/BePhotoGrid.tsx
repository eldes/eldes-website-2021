import { FunctionComponent } from 'react'
import { BeImageData } from './BeBody'
import BeImage from './BeImage'
import styles from '../styles/BePhotoGrid.module.scss'
import BeComponent, { BeComponentDefaultProps, BeComponentProps } from './BeComponent'

type Props = BeComponentProps & {
	images: BeImageData[]
	cols: number
	cellBackgroundColor?: string
}

const BePhotoGrid: FunctionComponent<Props> = ({ fill, foregroundColor, backgroundColor, images, cols, cellBackgroundColor }) => {
	return (
		<BeComponent subClassName={ styles.bePhotoGrid } fill={ fill } foregroundColor={ foregroundColor } backgroundColor={ backgroundColor }>
			<ul className={ styles['cols-' + Math.min(Math.max(cols, 1), 3)] }>
			{ images.map(image =>
				<li className={ styles.bePhotoGridItem } key={ image.src.src } style={{ backgroundColor: cellBackgroundColor }}><BeImage src={ image.src } alt={ image.alt } /></li>
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