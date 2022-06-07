import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { pieceBePageI18nNamespace } from '../../components/PieceBePage';
import BrasilNaBagagemTextbookIllustrationsBr from './br';
import BrasilNaBagagemTextbookIllustrationsEn from './en';

const BrasilNaBagagemTextbookIllustrationsPage: NextPage = () => {
	const { locale } = useRouter();
	return (locale === 'br') ? <BrasilNaBagagemTextbookIllustrationsBr /> : <BrasilNaBagagemTextbookIllustrationsEn/>
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', [...pieceBePageI18nNamespace, 'brasil-na-bagagem-textbook-illustrations'])),
		}
	}
}

export default BrasilNaBagagemTextbookIllustrationsPage;