import { Trans, useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { FunctionComponent, useState } from 'react'
import Font from '../models/Font'
import FontPrice from '../models/FontPrice'
import License from '../models/License'
import styles from '../styles/BuyFontPanel.module.scss'

type Props = {
	font: Font
	license: License
	fontPrice: FontPrice
}

const buyFontPanelI18nKey = 'BuyFontPanel'
const buyFontPanelI18n = [buyFontPanelI18nKey]

const BuyFontPanel: FunctionComponent<Props> = (props) => {

	const [opened, setOpened] = useState(false)

	const openButtonClicked = () => setOpened(true)
	const cancelButtonClicked = () => setOpened(false)

	const font = props.font
	const license = props.license
	const price = props.fontPrice

	const { locale } = useRouter()

	const { t } = useTranslation(buyFontPanelI18nKey)

	return (
		<div className={ styles.buyFontPanel }>
			{
				(! opened) && <button onClick={ openButtonClicked }><Trans t={t} i18nKey='buyTitle'>Buy</Trans></button>
			}
			{
				opened &&
				<form>
					<span className={styles.formTitle}><Trans t={t} i18nKey='buyTitle'>Buy</Trans></span>
					<input placeholder={t('fieldNamePlaceholder', 'Full name')} />
					<input placeholder={t('fieldEmailPlaceholder', 'Email')} />
					<table className={ styles.resume }>
						<caption><Trans t={t} i18nKey='Resume.title'>Resume</Trans></caption>
						<thead>
							<tr>
								<th>Product</th>
								<th>Quantity</th>
								<th>Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><Trans t={t} i18nKey='Resume.fontName' values={{name: font?.name}}>Font Eldes {font?.name}</Trans> - <Trans t={t} i18nKey='Resume.licenseName' values={{name: license?.name}}>{license?.name} License</Trans></td>
								<td><Trans t={t} i18nKey='Resume.unit' count={1}>1 unit</Trans></td>
								<td><Trans i18nKey='common:currencySymbol'>$</Trans> {locale === 'br' ? price.amount.br : price.amount.en}</td>
							</tr>
						</tbody>
						

					</table>
					<div className={ styles.formFooter }>
						<button className={ styles.secundary } onClick={ cancelButtonClicked }><Trans t={t} i18nKey='cancelButtonText'>Cancel</Trans></button>
					</div>
					
				</form>
			}
		</div>
	)
}

export {
	buyFontPanelI18n,
	buyFontPanelI18nKey
}

export default BuyFontPanel