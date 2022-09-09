import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { Localizer } from '../../models/Locale';
import Piece from '../../models/Piece';
import categoriesRepository from '../../repositories/categories-repository';
import Page, { PageSection } from '../Page';
import PieceList from '../PieceList';

export const categoryPageI18nNamespace = ['common', 'Page']

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const CategoryPage: FunctionComponent = () => {

	const router = useRouter();
	const { pathname } = router;
	const slug = pathname.substring(1)

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
			<Page
				title={localizer.getValue(category.title)}
				subtitle={localizer.getValue(category.subtitle)}
				section={ PageSection.Portfolio }
				backwardLink={ backwardLink }
				description={ localizer.getValue(category.description) }
			>
				<Head>
					<meta property="og:image" content={siteUrl + category.thumbnails[0]} key="ogimage" />
				</Head>
				<PieceList pieces={ pieces } />
			</Page>
		)
	} else {
		return <></>
	}
}

export default CategoryPage