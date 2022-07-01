import { CategoryHighlight } from './CategoryHighlight';
import Localized from './Locale';

type Category = {
	slug: string;
	title: Localized<string>;
	subtitle: Localized<string>;
	highlight: CategoryHighlight;
	thumbnails: string[];
	pieceSlugs: string[];
	description: Localized<string>;
};

export default Category;