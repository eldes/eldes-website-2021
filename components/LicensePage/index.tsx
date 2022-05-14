import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import licensesRepository from '../../repositories/licenses-repository';
import Page, { pageI18nNamespace, PageSection } from '../Page';
import styles from './styles.module.scss';

const i18nNamespace = [ ...pageI18nNamespace, 'fonts' ];

const LicensePage: FunctionComponent = () => {
  const { asPath, locale } = useRouter();
  const { t } = useTranslation();
  
	const slug = asPath.substring(1).split('#')[0]
  const license = licensesRepository.load(slug);

  const backwardLink = {
		text: t('common:Sections.fonts', 'Fonts'),
		href: '/fonts',
	}
  const [mdText, setMdText] = useState('');

  useEffect(() => {
    if (license) {
      fetch(`/content/${license.slug}/eula-${locale}.md`)
      .then(res => res.text())
      .then(text => setMdText(text))
    }
  }, [license, locale]);
  
  return (
    <Page
      title={t('fonts:licenseName', '', {name: license?.name})}
      section={PageSection.Fonts}
      backwardLink={backwardLink}
    >
      <div className={styles.licenseDoc}>
        <ReactMarkdown>{mdText}</ReactMarkdown>
      </div>
    </Page>
  );
};

export default LicensePage;
export {
  i18nNamespace as licensePageI18nNamespace
}