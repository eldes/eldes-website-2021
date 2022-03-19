import { Trans, useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import FontPrice from '../models/FontPrice'
import { useLocale } from '../models/Locale'
import fontsRepository from '../repositories/fonts-repository'
import licensesRepository from '../repositories/licenses-repository'
import BuyFontPanel, { buyFontPanelI18n } from './BuyFontPanel'
import { fontBePageI18nKey } from './FontBePage'

type Props = {
	fontPrice: FontPrice
}

const beLicenseListItemI18n: string[] = [...buyFontPanelI18n]

const BeLicenseListItem: FunctionComponent<Props> = (props) => {
	const fontPrice = props.fontPrice
	const font = fontsRepository.load(fontPrice.fontSlug)
	const license = licensesRepository.load(fontPrice.licenseSlug)
	const locale = useLocale()
	const { t } = useTranslation()
	
	return (
		<>
		{
			font && license &&
			<tr>
				<td><Trans i18nKey={`${fontBePageI18nKey}:License.name`} values={{ name: license?.name}}>{license?.name} License</Trans></td>
				<td>{t('common:currencySymbol', '$')} {fontPrice.amount[locale]}</td>
				<td>{license?.resume[locale]} <Link href={`/${license?.slug}-details`}><a><Trans i18nKey={`${fontBePageI18nKey}:seeMoreDetails`}>See more details...</Trans></a></Link></td>
				<td>
					<BuyFontPanel font={font} license={license} fontPrice={fontPrice} />
				</td>
			</tr>
		}
		</>
		
	)
}

export {
	beLicenseListItemI18n
}
export default BeLicenseListItem