import Document, { Head, Html, Main, NextScript } from 'next/document';

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;

class MyDocument extends Document {
	render(): JSX.Element {
		//TODO: Fix site icon.
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					{/* Chrome for Android: */}
					<link rel="icon" sizes="512x512" href="/public/icons/android-chrome-512x512.png" />
					<link rel="icon" sizes="192x192" href="/public/icons/android-chrome-192x192.png" />
					{/* iPhone 6 Plus with @3x display: */}
					<link rel="apple-touch-icon-precomposed" sizes="180x180" href="/public/icons/apple-touch-icon-180x180-precomposed.png" />
					{/* iPad with @2x display running iOS 7 or later: */}
					<link rel="apple-touch-icon-precomposed" sizes="152x152" href="/public/icons/apple-touch-icon-152x152-precomposed.png" />
					{/* iPad with @2x display running iOS 6 or earlier: */}
					<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/public/icons/apple-touch-icon-144x144-precomposed.png" />
					{/* iPhone with @2x display running iOS 7 or later: */}
					<link rel="apple-touch-icon-precomposed" sizes="120x120" href="/public/icons/apple-touch-icon-120x120-precomposed.png" />
 					{/* iPhone with @2x display running iOS 6 or earlier: */}
					<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/public/icons/apple-touch-icon-114x114-precomposed.png" />
					{/* iPad mini and the first- and second-generation iPad (with @1x display) running iOS 7 or later: */}
					<link rel="apple-touch-icon-precomposed" sizes="76x76" href="/public/icons/apple-touch-icon-76x76-precomposed.png" />
 					{/* iPad mini and the first- and second-generation iPad (with @1x display) running iOS 6 or earlier: */}
					<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/public/icons/apple-touch-icon-72x72-precomposed.png" />
 					{/* non-Retina iPhone, iPod Touch, and Android 2.1+ devices: */}
					<link rel="apple-touch-icon-precomposed" sizes="57x57" href="/public/icons/apple-touch-icon-57x57-precomposed.png" />
					{/* basic favicon */}
					<link rel="icon" href="/icons/favicon.svg" type="image/svg+xml"/>
					<link rel="icon" sizes="32x32" href="/icons/favicon-32x32.png" type="image/png" />
					<link rel="icon" sizes="16x16" href="/icons/favicon-16x16.png" type="image/png" />
					{/* default favicon */}
					<link rel="icon" href="favicon.ico" type="image/x-icon" />
					{/* theme color: */}
					<meta name="theme-color" media="(prefers-color-scheme: light)" content="#000" />
					<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
					{/* fonts: */}
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;700&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
					{/* Google Analytics */}
					{(process.env.NODE_ENV === 'production') && (
						<>
							<script async src={gtag} />
							<script 
								dangerouslySetInnerHTML={{
									__html: `
										window.dataLayer = window.dataLayer || [];
										function gtag(){dataLayer.push(arguments);}
										gtag('js', new Date());
										gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
											page_path: window.location.pathname,
										});
									`
								}}
							/>
						</>
					)}
					
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
};

export default MyDocument;