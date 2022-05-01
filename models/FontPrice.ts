import Localized from './Locale';
import Price from './Price';

type FontPrice = {
	fontSlug: string
	licenseSlug: string
	price: Localized<Price>
	pixCode: string
}

export default FontPrice