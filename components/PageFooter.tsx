import { FunctionComponent } from 'react'
import styles from '../styles/PageFooter.module.scss'

const PageFooter: FunctionComponent = () => {
	return (
		<footer className={ styles.pageFooter }>
			<p className={styles.disclaimer}>All artworks are Copyright Protected by Eldes. These images may not be downloaded, copied, linked to, or edited in any manner or form for use on any website, image gallery, clipart collection, printed product, or other derivative uses without express written permission from the author.</p>
		</footer>
	)
}

export default PageFooter