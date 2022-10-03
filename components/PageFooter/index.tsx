import { Trans } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

const PageFooter: FunctionComponent = () => {
	const router = useRouter();
	
	return (
		<footer className={ styles.pageFooter }>
			<a href="#top" className={styles.linkToTop}>top</a>
			<div className={styles.content}>
				<section className={styles.contact}>
					<h5><Trans i18nKey="Page:Footer.getInTouch">Get in touch</Trans></h5>
					<address>
						<a href="mailto:studio@eldes.com">studio@eldes.com</a>
						<a href="tel:+5516981618428">+55 (16) 98161-8428</a>
					</address>
				</section>
				<section className={styles.siteMap}>
					<h5><Trans i18nKey="Page:Footer.sections">Sections</Trans>:</h5>
					<nav>
						<Link href={'/portfolio'}><a><Trans i18nKey="Page:Footer.portfolio">Portfolio</Trans></a></Link>
						<Link href={'/fonts'}><a><Trans i18nKey="Page:Footer.fonts">Fonts</Trans></a></Link>
						<Link href={'/about'}><a><Trans i18nKey="Page:Footer.about">About</Trans></a></Link>
					</nav>
				</section>
				<section className={styles.siteMap}>
					<h5><Trans i18nKey="Page:Footer.language">Language</Trans>:</h5>
					<nav>
						<Link href={router.pathname} locale="en">EN</Link>
						<Link href={router.pathname} locale="br">BR</Link>
					</nav>
				</section>
				<section className={styles.social}>
					<h5><Trans i18nKey="Page:Footer.followUs">Follow us</Trans>:</h5>
					<div className={ styles.links }>
						<Link href="https://instagram.com/eldesCOM"><a target="_blank" className={styles.instagram} title="Instagram">Instagram</a></Link>
						<Link href="https://behance.net/eldes"><a target="_blank" className={styles.behance} title="Behance">Behance</a></Link>
						<Link href="https://github.com/eldes"><a target="_blank" className={styles.gitHub} title="GitHub">GitHub</a></Link>
						<Link href="https://twitter.com/eldes"><a target="_blank" className={styles.twitter} title="Twitter">Twitter</a></Link>
						<Link href="https://linkedin.com/in/eldes"><a target="_blank" className={styles.linkedIn} title="LinkedIn">LinkedIn</a></Link>
					</div>
				</section>
				<p className={styles.disclaimer}><Trans i18nKey="Page:Footer.disclaimer">All artworks are Copyright Protected by Eldes. These images may not be downloaded, copied, linked to, or edited in any manner or form for use on any website, image gallery, clipart collection, printed product, or other derivative uses without express written permission from the author.</Trans></p>
			</div>
		</footer>
	)
}

export default PageFooter