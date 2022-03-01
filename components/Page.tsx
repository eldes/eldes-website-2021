import Head from 'next/head'
import { FunctionComponent, ReactNode } from 'react'
import PageHeader from './PageHeader'
import styles from '../styles/Page.module.scss'
import PageFooter from './PageFooter'
import PageReverseNavigationBar, { PageReverseNavigationBarLink } from './PageReverseNavigationBar'

export enum PageSection {
	Home,
	Portfolio,
	Fonts,
	About,
}

type Props = {
	title: string,
	subtitle?: string,
	description?: string,
	section: PageSection,
	backwardLink?: PageReverseNavigationBarLink
	children?: ReactNode
}

const Page: FunctionComponent<Props> = ({ title, subtitle, description, section, backwardLink, children }) => {
	return (
		<div className={ styles.page }>
			<Head>
				<title>{ [title, subtitle].join(' ') }</title>
				description && <meta name="description" content={ description } />
			</Head>
			<a className={ styles.skipToMain } href="#main">Skip to main content</a>
			<PageHeader section={ section } />
			<PageReverseNavigationBar backwardLink={ backwardLink } />
			<main role="main" id="main" className={ styles.pageMain }>
				<article>
					<header>
						<h1>{ title } <small>{ subtitle }</small></h1>
					</header>
					{ children }
				</article>
			</main>
			<PageReverseNavigationBar backwardLink={ backwardLink } />
			<PageFooter />
		</div>
	)
}

export default Page