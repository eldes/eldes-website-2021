import { NextPage } from 'next';
import Page, { PageSection } from '../../components/Page';
import AppList from '../../components/AppList';
import AppsRepository from '../../repositories/apps-repository';

const AppsPageEn: NextPage = function () {
  return (
    <Page title='Apps' section={ PageSection.Apps }>
      <AppList apps={AppsRepository.loadAll()} />
		</Page>
  );
};

export default AppsPageEn;