import Localized from './Locale';

type Category = {
	slug: string
	title: Localized<string>
	subtitle: Localized<string>
	thumbnails: string[]
	pieceSlugs: string[]
}

export default Category