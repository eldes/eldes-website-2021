import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<meta name="application-name" content="Eldes" />
					<meta name="theme-color" content="#ffffff"></meta>
					<link rel="shortcut icon" href="/icons/favicon.ico"/>
					<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
					<link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
					<meta name="apple-mobile-web-app-title" content="Eldes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<link rel="apple-touch-startup-image" href="/icons/apple-touch-launch.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png" />
					<link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png" />
					<link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-touch-icon-144x144.png" />
					<link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-touch-icon-120x120.png" />
					<link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-touch-icon-114x114.png" />
					<link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-touch-icon-76x76.png" />
					<link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-touch-icon-72x72.png" />
					<link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-touch-icon-60x60.png" />
					<link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-touch-icon-57x57.png" />
					<link rel="manifest" href="/icons/site.webmanifest" />
					<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#ffffff" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta name="msapplication-config" content="/icons/browserconfig.xml" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument