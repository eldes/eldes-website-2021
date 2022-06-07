import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { pieceBePageI18nNamespace } from '../../components/PieceBePage';
import { LocaleCode, Localizer } from '../../models/Locale';
import PieceBePageBr from './br';
import PieceBePageEn from './en';

const BrasilNaBagagemTextbookIllustrationsPage: NextPage = () => {
	const localizer = Localizer.make(useRouter());
	return (localizer.getLocale().code === LocaleCode.Br) ? <PieceBePageBr /> : <PieceBePageEn/>
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', [...pieceBePageI18nNamespace, 'brasil-na-bagagem-textbook-illustrations'])),
		}
	}
}

export default BrasilNaBagagemTextbookIllustrationsPage;