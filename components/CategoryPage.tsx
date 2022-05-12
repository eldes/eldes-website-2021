import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import Page, { PageSection } from '../components/Page';
import PieceList from '../components/PieceList';
import { Localizer } from '../models/Locale';
import Piece from '../models/Piece';
import categoriesRepository from '../repositories/categories-repository';

export const categoryPageI18nNamespace = ['common', 'Page']

const CategoryPage: FunctionComponent = () => {

	const router = useRouter();
	const { asPath } = router;
	const slug = asPath.substring(1)

	const category = categoriesRepository.load(slug)
	const pieces: Piece[] = categoriesRepository.loadAllPieces(slug)

	const localizer = Localizer.make(router);
	const { t } = useTranslation(categoryPageI18nNamespace);

	const backwardLink = {
		text: t('common:Sections.portfolio', 'Portfolio'),
		href: '/portfolio',
	}

	if (category) {
		return (
			<Page title={localizer.getValue(category.title)} subtitle={localizer.getValue(category.subtitle)} section={ PageSection.Portfolio } backwardLink={ backwardLink }>
				<PieceList pieces={ pieces } />
			</Page>
		)
	} else {
		return <></>
	}
}

export default CategoryPage