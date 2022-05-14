import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/app.scss';
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    const routerChanged = (url: URL) => {
      if (process.env.NODE_ENV === 'production') {
        const gaId: string = process.env.NEXT_PUBLIC_GA_ID ?? '';
        const configParams: Gtag.ConfigParams = {
          page_path: url.toString(),
        };
        window.gtag('config', gaId, configParams);
      }
    }
    router.events.on('routeChangeComplete', routerChanged);
    return () => {
      router.events.on('routeChangeComplete', routerChanged);
    };
  }, [router.events]);
  return <Component {...pageProps} />
};

export default appWithTranslation(MyApp);