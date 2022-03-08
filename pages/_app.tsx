import { appWithTranslation } from 'next-i18next'
import '../styles/app.scss'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default appWithTranslation(MyApp)