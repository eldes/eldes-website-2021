import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import License from '../../models/License';
import licensesRepository from '../../repositories/licenses-repository';
import Page, { PageSection } from '../Page';
import styles from './styles.module.scss';

const LicensePage: FunctionComponent = () => {

  const { asPath } = useRouter()
	const slug = asPath.substring(1).split('#')[0]
  const license = licensesRepository.load(slug);

  const backwardLink = {
		text: 'Fonts',
		href: '/fonts',
	}
  const [mdText, setMdText] = useState('');

  useEffect(() => {
    if (license) {
      fetch(`/content/${license.slug}/eula-br.md`)
      .then(res => res.text())
      .then(text => setMdText(text))
    }
  }, []);
  
  return (
    <Page
      title={`Licença ${license?.name}` ?? ''}
      section={PageSection.Fonts}
      backwardLink={backwardLink}
    >
      <div className={styles.licenseDoc}>
        <ReactMarkdown children={mdText} />
      </div>
    </Page>


    
  );
};

export default LicensePage;