import { NextRouter } from 'next/router';
import { i18nRoutes } from '../next-i18next.config';
import { Currency } from './Price';

enum LocaleCode {
	En = 'en',
	Br = 'br',
	Default = En,
};

type Locale = {
	code: string,
	currency: Currency,
};

type Localized<T> = {
	[Property in LocaleCode]: T
};

type I18nRoute = {
	source: string;
	destination: string;
};

class Localizer {
	private router: NextRouter;

	private constructor(router: NextRouter) {
		this.router = router;
	}

	static make(router: NextRouter) {
		return new Localizer(router);
	}

	getLocale() {
		return this.getValue(Locales);
	}

	getValue<T>(localized: Localized<T>) {
		return localized ? localized[this.router.locale as LocaleCode] : localized
	}

	getRoute(destination: string, localeCode?: string) {
		return (i18nRoutes[localeCode ? localeCode : this.getLocale().code] as I18nRoute[])?.filter(route => route.destination === destination)[0]?.source ?? destination;
	}
}

const Locales: Localized<Locale> = {
	br: {
		code: LocaleCode.Br,
		currency: {
			code: 'BRL',
			symbol: 'R$',
		},
	},
	en : {
		code: LocaleCode.En,
		currency: {
			code: 'USD',
			symbol: '$',
		},
	},
};

export default Localized;
export {
	LocaleCode,
	Locales,
	Localizer,
};