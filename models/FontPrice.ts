import Locale from './Locale';

type FontPrice = {
	fontSlug: string
	licenseSlug: string
	amount: Locale<number>
	pixCode?: string
}

export default FontPrice