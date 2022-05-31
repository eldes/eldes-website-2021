import Document, { Head, Html, Main, NextScript } from 'next/document';

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;

class MyDocument extends Document {
	render(): JSX.Element {
		//TODO: Fix site icon.
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					{/* icons */}
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="shortcut icon" href="/favicon.ico" />
					<meta name="theme-color" content="#ffffff" />
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