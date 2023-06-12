import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import { Localizer } from '../../models/Locale';
import PiecesRepository from '../../repositories/pieces-repository';
import BePage, { bePageI18nNamespace } from '../BePage';
import { BeSeeMorePanelProps } from '../BeSeeMorePanel';
import { PageSection } from '../Page';

type Props = BeSeeMorePanelProps & {
	backgroundColor?: string;
	foregroundColor?: string;
	children: ReactNode;
};

const PieceBePage: FC<Props> = (props) => {

	const router = useRouter();
	const { pathname } = router;
	const slug = pathname.substring(1).split('#')[0]

	const piece = PiecesRepository.load(slug)
	const categories = PiecesRepository.loadAllCategories(slug)
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
					seeMoreList={ props.seeMoreList }
			>
				<Head>
					<meta property="og:image" content={siteUrl + piece.thumbnail} key="ogimage" />
					<meta property="og:image:width" content={'512'} key="ogimagewidth" />
					<meta property="og:image:height" content={'512'} key="ogimageheight" />
					<meta property="twitter:image" content={`${siteUrl}/logotype.svg`} key="twitterimage" />
				</Head>	
				{ props.children }
			</BePage>
			)}
		</>
	);
};

export default PieceBePage;
export const pieceBePageI18nNamespace = [... bePageI18nNamespace, 'PieceBePage'];