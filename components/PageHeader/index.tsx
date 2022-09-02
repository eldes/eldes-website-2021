import { Trans } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import logotype from '../../public/logotype.svg';
import LocaleLink from '../LocaleLink';
import { PageSection } from '../Page';
import styles from './styles.module.scss';

type Props = {
	section: PageSection
}

const PageHeader: FunctionComponent<Props> = ({ section }) => {

	const router = useRouter()

	const [menuPanelIsOpened, setMenuPanelIsOpened] = useState(false)
	const toggleMenuPanel = () => setMenuPanelIsOpened(!menuPanelIsOpened)

	return (
		<header className={ styles.pageHeader }>
			<div className={ styles.masthead }>
				<div className={styles.title}>
					<Link href="/">
						<a><Image className={ styles.logotype } src={ logotype } alt="Eldes" /></a>
					</Link>
				</div>
				
				<div className={styles.subtitle}>
					<span><Trans i18nKey="Page:Header.illustrator">Illustrator</Trans></span>
					<span><Trans i18nKey="Page:Header.graphicDesigner">Graphic Designer</Trans></span>
					<span><Trans i18nKey="Page:Header.softwareEngineer">Software Engineer</Trans></span>
				</div>
			</div>
			<button className={`${styles.menuButton} ${menuPanelIsOpened ? styles.close : styles.open}`} onClick={ toggleMenuPanel }>Menu</button>
			<div className={`${styles.menuPanel} ${menuPanelIsOpened ? styles.opened : ''}`} onClick={toggleMenuPanel}>
				<nav className={styles.mainMenu}>
					<Link href="/"><a className={`${styles.menuItem} ${ section === PageSection.Home ? styles.active : ''}`}>Home</a></Link>
					<LocaleLink href="/portfolio"><a className={`${styles.menuItem} ${ section === PageSection.Portfolio ? styles.active : ''}`}><Trans i18nKey="Page:Header.MainMenu.portfolio">Portfolio</Trans></a></LocaleLink>
					<LocaleLink href='/fonts'><a className={`${styles.menuItem} ${ section === PageSection.Fonts ? styles.active : ''}`}><Trans i18nKey="Page:Header.MainMenu.fonts">Fonts</Trans></a></LocaleLink>
					<LocaleLink href="/about"><a className={`${styles.menuItem} ${ section === PageSection.About ? styles.active : ''}`}><Trans i18nKey="Page:Header.MainMenu.about">About</Trans></a></LocaleLink>
				</nav>
				<ul className={styles.langMenu}>
					<li><LocaleLink href={router.pathname} locale="en"><a className={`${styles.menuItem} ${router.locale === 'en'? styles.active : ''}`}>EN</a></LocaleLink></li>
					<li><LocaleLink href={router.pathname} locale="br"><a className={`${styles.menuItem} ${router.locale === 'br'? styles.active : ''}`}>BR</a></LocaleLink></li>
				</ul>
			</div>
		</header>
	)
}

export default PageHeader