import Localized from './Locale';

type Font = {
	slug: string;
	name: string;
	thumbnail: string;
	description: Localized<string>;
}

export default Font