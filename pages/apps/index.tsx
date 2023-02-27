import { NextPage } from 'next';
import SwitchLocale from '../../components/SwitchLocale';
import AppsPageBr from './br';
import AppsPageEn from './en';

const AppsPage: NextPage = function () {
  return (
    <SwitchLocale
      en={<AppsPageEn/>}
      br={<AppsPageBr/>}
    />
  );
};

export default AppsPage;