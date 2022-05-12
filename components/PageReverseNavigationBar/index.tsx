import Link from 'next/link';
import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

export type PageReverseNavigationBarLink = {
	text: string
	href: string
}

type Props = {
	backwardLink?: PageReverseNavigationBarLink
}

const PageReverseNavigationBar: FunctionComponent<Props> = ({ backwardLink }) => {
	return (
		<>
		{
			backwardLink && (
				<div className={ styles.pageReverseNavigationBar }>
					<Link href={ backwardLink.href } >
						<a className={ styles.backwardLink }>{ backwardLink.text }</a>
					</Link>
				</div>
			)
		}
		</>
	)
}

export default PageReverseNavigationBar