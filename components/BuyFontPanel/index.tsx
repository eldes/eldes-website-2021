import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Trans, useTranslation } from 'next-i18next';
import { ChangeEventHandler, FormEventHandler, FunctionComponent, useState } from 'react';
import Font from '../../models/Font';
import FontPrice from '../../models/FontPrice';
import License from '../../models/License';
import { LocaleEnum, useLocale } from '../../models/Locale';
import styles from '../../styles/BuyFontPanel.module.scss';
import FormFieldRadioGroup from '../FormFieldRadioGroup';
import FormFieldText from '../FormFieldText';
import LicenseePanel, { LicenseePanelChangeEventHandler, LicenseePanelData } from './LicenseePanel';
import PaypalPanel from './PaypalPanel';
import PixPanel from './PixPanel';

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

	const locale = useLocale()
	const { t } = useTranslation(buyFontPanelI18nKey)

	enum PaymentMethodEnum {
		Pix,
		PayPal
	}

	const [licenseePanelData, setLicenseePanelData] = useState<LicenseePanelData>()
	const licenseePanelChanged: LicenseePanelChangeEventHandler = data => setLicenseePanelData(data)

	const [paymentMethod, setPaymentMethod] = useState<PaymentMethodEnum | undefined>(undefined)
	const [pixReceipt, setPixReceipt] = useState<string>()


	const finishButtonDisabled = () => licenseePanelData?.isInvalid() || (paymentMethod === undefined) || ((paymentMethod === PaymentMethodEnum.Pix) && (pixReceipt === undefined))

	const paymentMethodChanged = (value: string) => {
		setPaymentMethod(value === PaymentMethodEnum.Pix.toString() ? PaymentMethodEnum.Pix : PaymentMethodEnum.PayPal)
	}
	
	const pixReceiptChanged: ChangeEventHandler<HTMLInputElement> = event => {
		setPixReceipt(event.target.value)
	}

	const formSubmited: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault()

		const jsonData = JSON.stringify(licenseePanelData)

		const endpoint = '/api/buy-font'

		const options = {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: jsonData,
		}

		const response = await fetch(endpoint, options)

		const result = await response.json()

		console.log(result.saved)
	}

	return (
		<div className={ styles.buyFontPanel }>
			{
				(! opened) && <button onClick={ openButtonClicked }><Trans t={t} i18nKey='buyTitle'>Buy</Trans></button>
			}
			{
				opened &&
				<form onSubmit={formSubmited}>
					<div className={styles.formHeader}>
						<h4 className={styles.formTitle}><Trans t={t} i18nKey='buyTitle'>Buy</Trans></h4>
						<p><Trans t={t} i18nKey='fillMessage'>Please fill in the LICENSEE data, that is, the owner of the computer where the font will be installed and used.</Trans></p>
					</div>
					<div className={styles.formBody}>
						<h5 className={styles.formSectionTitle}>Dados do licenciado</h5>
						<LicenseePanel onChange={licenseePanelChanged}/>
					</div>

					{
						(licenseePanelData) && (licenseePanelData.isValid()) &&
						<div className={styles.formBody}>
							<h5 className={styles.formSectionTitle}>Forma de pagamento</h5>
						{
							locale === LocaleEnum.br &&
							<FormFieldRadioGroup
								name='paymentMethod'
								onChange={paymentMethodChanged}
								formFieldProps={[
									{
										label: 'Pix',
										value: PaymentMethodEnum.Pix.toString(),
										disabled: licenseePanelData.isInvalid(),
									},
									{
										label: 'PayPal',
										value: PaymentMethodEnum.PayPal.toString(),
										disabled: licenseePanelData.isInvalid(),
									},
								]}
								value={paymentMethod?.toString()}
							/>
						}

						{
							(paymentMethod === PaymentMethodEnum.Pix) &&
							<PixPanel code={props.fontPrice.pixCode} receiptOnChange={pixReceiptChanged} />	
						}

						{
							((paymentMethod === PaymentMethodEnum.PayPal) || (locale === 'en')) &&
							<PaypalPanel price={price} />
						}
						</div>
					}
					

				

					<div className={styles.formFooter}>
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

						<div className={styles.buttonsPanel}>
							<button className={ styles.secundary } onClick={ cancelButtonClicked }><Trans t={t} i18nKey='cancelButtonText'>Cancel</Trans></button>
							<button type='submit' disabled={finishButtonDisabled()}>Finish</button>
						</div>
						
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