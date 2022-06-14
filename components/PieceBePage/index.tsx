import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Localizer } from '../../models/Locale';
import piecesRepository from '../../repositories/pieces-repository';
import BePage, { bePageI18nNamespace } from '../BePage';
import { PageSection } from '../Page';

type Props = {
	backgroundColor?: string
	foregroundColor?: string
};

const PieceBePage: NextPage<Props> = (props) => {

	const router = useRouter();
	const { asPath } = router;
	const slug = asPath.substring(1).split('#')[0]

	const piece = piecesRepository.load(slug)
	const categories = piecesRepository.loadAllCategories(slug)
	const firstCategory = categories[0]

	const localizer = Localizer.make(router);

	const backwardLink = {
		text: `${localizer.getValue(firstCategory?.title)} ${localizer.getValue(firstCategory?.subtitle)}`,
		href: `/${firstCategory?.slug}`,	
	}

	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

	return (
		<>
			{(piece) && (
				<BePage
					title={ localizer.getValue(piece.title) }
					subtitle={ localizer.getValue(piece.subtitle) }
					description={ localizer.getValue(piece.description) }
					section={ PageSection.Portfolio }
					backwardLink={ backwardLink }
					backgroundColor={ props.backgroundColor }
					foregroundColor={ props.foregroundColor }
			>
				<Head>
					<meta property="og:image" content={siteUrl + piece.thumbnail} key="ogimage" />
				</Head>	
				{ props.children }
			</BePage>
			)}
		</>
	);
};

export default PieceBePage;
export const pieceBePageI18nNamespace = [... bePageI18nNamespace, 'PieceBePage'];