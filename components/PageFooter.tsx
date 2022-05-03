import Link from 'next/link'
import { FunctionComponent } from 'react'
import styles from '../styles/PageFooter.module.scss'

const PageFooter: FunctionComponent = () => {
	return (
		<footer className={ styles.pageFooter }>
			<section className={styles.siteMap}>
				<h5>Map:</h5>
				<nav>
					<Link href={'/portfolio'}>Portfolio</Link>
					<Link href={'/fonts'}>Fonts</Link>
					<Link href={'/about'}>About</Link>
				</nav>
			</section>
			<section className={styles.contact}>
				<h5>Contact:</h5>
				<p>studio@eldes.com</p>
				<p>+55 (16) 98161-8428</p>
			</section>
			<section className={styles.social}>
				<h5>Follow us:</h5>
				<div className={ styles.links }>
					<Link href="https://instagram.com/eldesCOM"><a target="_blank" className={styles.instagram}>Instagram</a></Link>
					<Link href="https://behance.net/eldes"><a target="_blank" className={styles.behance}>Behance</a></Link>
					<Link href="https://twitter.com/eldes"><a target="_blank" className={styles.twitter}>Twitter</a></Link>	<Link href="https://linkedin.com/in/eldes"><a target="_blank" className={styles.linkedIn}>LinkedIn</a></Link>
				</div>
			</section>
			<p className={styles.disclaimer}>All artworks are Copyright Protected by Eldes. These images may not be downloaded, copied, linked to, or edited in any manner or form for use on any website, image gallery, clipart collection, printed product, or other derivative uses without express written permission from the author.</p>
		</footer>
	)
}

export default PageFooter