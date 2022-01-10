import { FunctionComponent, ReactNode } from 'react'
import CSS from 'csstype'
import styles from '../styles/BeParagraph.module.scss'
import BeComponent, { BeComponentProps } from './BeComponent'

type Props = BeComponentProps & {
	style: CSS.Properties
	children: ReactNode
}

const BeParagaph: FunctionComponent<Props> = ({ style, children, backgroundColor }) => {

	return (
		<BeComponent backgroundColor={ backgroundColor }>
			<p className={ styles.beParagraph } style={ style }>
				{ children }
			</p>
		</BeComponent>
	)
}

export default BeParagaph