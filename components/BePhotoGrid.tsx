import { FunctionComponent } from 'react'
import { BeImageData } from './BeBody'
import BeImage from './BeImage'
import styles from '../styles/BePhotoGrid.module.scss'
import BeComponent, { BeComponentProps } from './BeComponent'

type Props = BeComponentProps & {
	images: BeImageData[]
	cols: number
	cellBackgroundColor?: string
}

const BePhotoGrid: FunctionComponent<Props> = ({ images, cols, cellBackgroundColor, backgroundColor }) => {
	return (
		<BeComponent backgroundColor={ backgroundColor }>
			<ul className={ `${styles.bePhotoGrid} ${styles['cols-' + cols]}` }>
			{ images.map(image =>
				<li className={ styles.bePhotoGridItem } key={ image.src.src } style={{ backgroundColor: cellBackgroundColor }}><BeImage src={ image.src } alt={ image.alt } /></li>
			)}
			</ul>
		</BeComponent>
	)
}

export default BePhotoGrid