import Localized from './Locale';

type Piece = {
	slug: string
	title: Localized<string>
	subtitle: Localized<string>
	thumbnail: string
}

export default Piece