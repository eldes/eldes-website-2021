import { FunctionComponent } from 'react'
import styles from '../styles/BeMenu.module.scss'
import BeComponent, { BeComponentProps } from './BeComponent'

type Link = {
	text: string
	id: string
}

type Props = BeComponentProps & {
	links: Link[]
}

const BeMenu: FunctionComponent<Props> = ({ links, fill, foregroundColor, backgroundColor, horizontalPadding, verticalPadding }) => {
	return (
		<BeComponent
			subClassName={ styles.beMenu }
			fill={ fill }
			foregroundColor={ foregroundColor }
			backgroundColor={ backgroundColor }
			horizontalPadding={ horizontalPadding }
			verticalPadding={ verticalPadding }
		>
			<nav>
				{
					links.map(link => (
						<a href={`#${link.id}`} key={link.id}>{link.text}</a>
					))
				}
			</nav>
		</BeComponent>
	)
}

export default BeMenu
export type {
	Link as BeMenuLink
}