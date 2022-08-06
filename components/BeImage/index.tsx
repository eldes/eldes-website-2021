import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { LocaleCode } from '../../models/Locale';
import { BeImageData } from '../BeBody';
import BeComponent, { beComponentDefaultProps, BeComponentProps } from '../BeComponent';
import styles from './styles.module.scss';

type Props = BeComponentProps & BeImageData & {
	link?: string
}

const BeImage: FunctionComponent<Props> = (props) => {
	const className = props.round ? `${styles.beImage} ${styles.round}` : styles.beImage

	return (
		<BeComponent
			subClassName={ className }
			fill={ props.fill }
			foregroundColor={ props.foregroundColor }
			backgroundColor={ props.backgroundColor }
			horizontalPadding={ props.horizontalPadding }
			verticalPadding={ props.verticalPadding }
		>
			<Link href={props.link ? props.link : props.src.src} passHref locale={LocaleCode.Default}>
				<a>
					{props.fill ?
						<Image
							src={ props.src }
							alt={ props.alt }
							layout="responsive"
						/>
					:
						<Image
							src={ props.src }
							alt={ props.alt }
							width={ props.width }
							height={ props.height }
							layout="intrinsic"
						/>
					}
				</a>
			</Link>
		</BeComponent>
	)
}

BeImage.defaultProps = {
	...beComponentDefaultProps
}

export default BeImage