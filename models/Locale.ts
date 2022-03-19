import { useRouter } from 'next/router'

enum LocaleEnum {
	en = 'en',
	br = 'br',
	default = en,
}

type Locale<T> = {
	[Property in LocaleEnum]: T
}

const useLocale = () => {
	const router = useRouter()
	if (router.locale) {
		if (router.locale in LocaleEnum) {
			return router.locale as LocaleEnum
		}
	}

	return LocaleEnum.default
}

export {
	LocaleEnum as Locale,
	useLocale
}
export default Locale