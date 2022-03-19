import Locale from './Locale'

type FontPrice = {
	fontSlug: string
	licenseSlug: string
	amount: Locale<number>
}

export default FontPrice