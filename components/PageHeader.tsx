import { Trans } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import logotype from '../public/logotype.svg';
import styles from '../styles/PageHeader.module.scss';
import { PageSection } from './Page';

type Props = {
	section: PageSection
}

const PageHeader: FunctionComponent<Props> = ({ section }) => {

	const router = useRouter()

	const [menuPanelIsOpened, setMenuPanelIsOpened] = useState(false)
	const toggleMenuPanel = () => setMenuPanelIsOpened(!menuPanelIsOpened)

	//TODO: Remove TAGs H1 and H2. Exchange of HGROUP for DIV.masthead, remove H1, and exchange of H2 for DIV.subtitle.
	return (
		<header className={ styles.pageHeader }>
			<hgroup>
				<h1>
					<Link href="/about">
						<a><Image className={ styles.logotype } src={ logotype } alt="Eldes" /></a>
					</Link>
				</h1>
				<h2>
					<span><Trans i18nKey="Page:Header.illustrator">Illustrator</Trans></span>
					<span><Trans i18nKey="Page:Header.graphicDesigner">Graphic Designer</Trans></span>
					<span><Trans i18nKey="Page:Header.softwareEngineer">Software Engineer</Trans></span>
				</h2>
			</hgroup>
			<button className={`${styles.menuButton} ${menuPanelIsOpened ? styles.close : styles.open}`} onClick={ toggleMenuPanel }>Menu</button>
				<div className={`${styles.menuPanel} ${menuPanelIsOpened ? styles.opened : ''}`} onClick={toggleMenuPanel}>
					<nav className={styles.mainMenu}>
						<Link href="/"><a className={`${styles.menuItem} ${ section === PageSection.Home ? styles.active : ''}`}>Home</a></Link>
						<Link href="/portfolio"><a className={`${styles.menuItem} ${ section === PageSection.Portfolio ? styles.active : ''}`}><Trans i18nKey="Page:Header.MainMenu.portfolio">Portfolio</Trans></a></Link>
						<Link href="/fonts"><a className={`${styles.menuItem} ${ section === PageSection.Fonts ? styles.active : ''}`}><Trans i18nKey="Page:Header.MainMenu.fonts">Fonts</Trans></a></Link>
						<Link href="/about"><a className={`${styles.menuItem} ${ section === PageSection.About ? styles.active : ''}`}><Trans i18nKey="Page:Header.MainMenu.about">About</Trans></a></Link>
					</nav>
					<ul className={styles.langMenu}>
						<li><Link href={router.pathname} locale="en"><a className={`${styles.menuItem} ${router.locale === 'en'? styles.active : ''}`}>EN</a></Link></li>
						<li><Link href={router.pathname} locale="br"><a className={`${styles.menuItem} ${router.locale === 'br'? styles.active : ''}`}>BR</a></Link></li>
					</ul>
				</div>
		</header>
	)
}

export default PageHeader