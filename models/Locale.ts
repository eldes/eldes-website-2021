import { route } from 'next/dist/server/router';
import { NextRouter } from 'next/router';
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