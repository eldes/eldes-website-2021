import Localized from './Locale';

type Piece = {
	slug: string;
	title: Localized<string>;
	subtitle: Localized<string>;
	thumbnail: string;
	description: Localized<string>;
};

export default Piece;