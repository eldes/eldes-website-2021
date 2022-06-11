import Head from 'next/head';
import { useRouter } from 'next/router';
import { FunctionComponent, ReactNode } from 'react';
import styles from '../styles/Page.module.scss';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';
import PageReverseNavigationBar, { PageReverseNavigationBarLink } from './PageReverseNavigationBar';

const i18nNamespace = ['common', 'Page'];

enum Section {
	Home,
	Portfolio,
	Fonts,
	About,
}

type Props = {
	pretitle?: string
	title: string,
	subtitle?: string,
	description?: string,
	section: Section,
	backwardLink?: PageReverseNavigationBarLink
	children?: ReactNode
}

const Page: FunctionComponent<Props> = (props) => {
	const router = useRouter();
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
	const title = [props.pretitle, props.title, props.subtitle].join(' ')

	return (
		<div className={ styles.page }>
			<Head>
				<title>{ title }</title>
				<meta property="og:title" content={ title } key="ogtitle" />

				{(props.description) && (
					<>
						<meta name="description" content={ props.description } />
						<meta property="og:description" content={ props.description } key="ogdescription" />
					</>
				)} 
				<meta property="og:url" content={siteUrl + router.asPath} key="ogurl" />
				<meta property="og:image" content={`${siteUrl}/logotype.svg`} key="ogimage" />
			</Head>
			<a className={ styles.skipToMain } href="#main">Skip to main content</a>
			<PageHeader section={ props.section } />
			<PageReverseNavigationBar backwardLink={ props.backwardLink } />
			<main role="main" id="main" className={ styles.pageMain }>
				<article>
					<header>
						<h1><small>{ props.pretitle}</small> { props.title } <small>{ props.subtitle }</small></h1>
					</header>
					{ props.children }
				</article>
			</main>
			<PageReverseNavigationBar backwardLink={ props.backwardLink } />
			<PageFooter />
		</div>
	)
}

export default Page
export {
	i18nNamespace as pageI18nNamespace,
	Section as PageSection,
	type Props as PageProps
}