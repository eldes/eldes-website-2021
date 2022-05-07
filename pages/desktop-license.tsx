import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LicensePage, { licensePageI18nNamespace } from '../components/LicensePage';

const DesktopLicensePage: NextPage = () =>  {
  return <LicensePage />;
};

export default DesktopLicensePage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', [...licensePageI18nNamespace])),
		}
	}
}