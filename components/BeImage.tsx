import { FunctionComponent } from 'react'
import Image from 'next/image'
import { BeImageData } from './BeBody'
import BeComponent, { BeComponentProps } from './BeComponent'
import styles from '../styles/BeImage.module.scss'

type Props = BeComponentProps & BeImageData & {
	fill?: boolean
}

const BeImage: FunctionComponent<Props> = ({ src, alt, fill, backgroundColor }) => {
	return (
		<BeComponent backgroundColor={ backgroundColor } fill={ fill }>
			<Image className={ styles.beImage }
				src={ src }
				alt={ alt }
				layout={ fill ? 'responsive' : 'intrinsic' }
			/>
		</BeComponent>
	)
}

export default BeImage