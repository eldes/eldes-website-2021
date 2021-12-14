import Head from 'next/head'
import { FunctionComponent, ReactNode } from 'react'
import PageHeader from './PageHeader'
import styles from '../styles/Page.module.scss'
import PageFooter from './PageFooter'

export enum PageSection {
	Home,
	Portfolio,
	Fonts,
}

type Props = {
	title: string,
	description?: string,
	section: PageSection,
	children?: ReactNode
}

const Page: FunctionComponent<Props> = ({ title, description, section, children }) => {
	return (
		<div className={ styles.page }>
			<Head>
				<title>{ title }</title>
				description && <meta name="description" content={ description } />
			</Head>
			<a className={ styles.skipToMain } href="#main">Skip to main content</a>
			<PageHeader section={ section } />
			<main role="main" id="main" className={ styles.pageMain }>
				<article>
					{ children }
				</article>
			</main>
			<PageFooter />
		</div>
	)
}

export default Page