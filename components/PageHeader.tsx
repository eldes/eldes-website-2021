import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent, useState } from 'react'
import styles from '../styles/PageHeader.module.scss'
import logotype from '../public/logotype.svg'
import { useRouter } from 'next/router'
import { PageSection } from './Page'

type Props = {
	section: PageSection
}

const PageHeader: FunctionComponent<Props> = ({ section }) => {

	const router = useRouter()

	const [menuPanelIsOpened, setMenuPanelIsOpened] = useState(false)
	const toggleMenuPanel = () => setMenuPanelIsOpened(!menuPanelIsOpened)

	return (
		<header className={ styles.pageHeader }>
			<hgroup>
				<h1>
					<Link href="/">
						<a><Image className={ styles.logotype } src={ logotype } alt="Eldes" /></a>
					</Link>
				</h1>
				<h2>
					<span>Illustrator</span>
					<span>Graphic Designer</span>
					<span>Software Engineer</span>
				</h2>
			</hgroup>
			<button className={`${styles.menuButton} ${menuPanelIsOpened ? styles.close : styles.open}`} onClick={ toggleMenuPanel }>Menu</button>
				<div className={`${styles.menuPanel} ${menuPanelIsOpened ? styles.opened : ''}`} onClick={toggleMenuPanel}>
					<nav className={styles.mainMenu}>
						<Link href="/"><a className={`${styles.menuItem} ${ section === PageSection.Home ? styles.active : ''}`}>Home</a></Link>
						<Link href="/portfolio"><a className={`${styles.menuItem} ${ section === PageSection.Portfolio ? styles.active : ''}`}>Portfolio</a></Link>
						<Link href="/fonts"><a className={`${styles.menuItem} ${ section === PageSection.Fonts ? styles.active : ''}`}>Fonts</a></Link>
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