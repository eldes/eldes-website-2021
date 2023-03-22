import { FC } from 'react';
import styles from '../styles/BePhotoGrid.module.scss';
import { BeImageData } from './BeBody';
import BeComponent, { beComponentDefaultProps, BeComponentProps } from './BeComponent';
import BeImage from './BeImage';

type Props = BeComponentProps & {
	images: BeImageData[]
	cols: number
	cellBackgroundColor?: string
}

const BePhotoGrid: FC<Props> = (props) => {
	return (
		<BeComponent
			subClassName={ styles.bePhotoGrid }
			fill={ props.fill }
			foregroundColor={ props.foregroundColor }
			backgroundColor={ props.backgroundColor }
			horizontalPadding={ props.horizontalPadding }
			verticalPadding={ props.verticalPadding }
		>
			<ul className={ styles['cols-' + Math.min(Math.max(props.cols, 1), 4)] }>
			{ props.images.map(image =>
				<li className={ styles.bePhotoGridItem } key={ image.src.src } style={{ backgroundColor: props.cellBackgroundColor }}><BeImage src={ image.src } alt={ image.alt } round={image.round} /></li>
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