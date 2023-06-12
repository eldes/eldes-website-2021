import Head from 'next/head';
import { useRouter } from 'next/router';
import { FunctionComponent, ReactNode } from 'react';
import PageFooter from '../PageFooter';
import PageHeader from '../PageHeader';
import PageReverseNavigationBar, { PageReverseNavigationBarLink } from '../PageReverseNavigationBar';
import styles from './styles.module.scss';

const i18nNamespace = ['common', 'Page'];

enum Section {
	Home,
	Portfolio,
	Fonts,
	Apps,
	About,
}

type Props = {
	pretitle?: string;
	title: string;
	subtitle?: string;
	description?: string;
	section: Section;
	backwardLink?: PageReverseNavigationBarLink;
	children: ReactNode;
};

const Page: FunctionComponent<Props> = (props) => {
	const router = useRouter();
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
	const title = (props.title.trim().length > 0) ? [props.pretitle, props.title, props.subtitle].join(' ').trim() : 'Eldes Studio';

	return (
		<div className={ styles.page } id='top'>
			<Head>
				<title>{ title }</title>
				<meta property="og:type" content={ 'website' } key="ogtype" />
				<meta property="og:site_name" content={ 'Eldes Studio' } key="ogsitename" />
				<meta property="og:title" content={ title } key="ogtitle" />
				<meta property="twitter:title" content={ title } key="ogtitle" />

				{(props.description) && (
					<>
						<meta name="description" content={ props.description } />
						<meta property="og:description" content={ props.description } key="ogdescription" />
						<meta property="twitter:description" content={ props.description } />
					</>
				)} 
				<meta property="og:url" content={siteUrl + router.pathname} key="ogurl" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={`${siteUrl}/logotype.svg`} key="ogimage" />
				<meta property="og:image:width" content={'512'} key="ogimagewidth" />
				<meta property="og:image:height" content={'512'} key="ogimageheight" />
				<meta property="twitter:image" content={`${siteUrl}/logotype.svg`} />
				<meta name="twitter:card" content="summary" />
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

Page.defaultProps = {
	title: 'Eldes: illustrator, graphic designer and software engineer',
	description: 'Illustrations, animations, fonts, apps and more from Eldes — illustrator, graphic designer and software engineer',
};

export default Page
export {
	i18nNamespace as pageI18nNamespace,
	Section as PageSection,
	type Props as PageProps
}