import { Trans, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FormEventHandler, FunctionComponent, useMemo, useState } from 'react';
import Font from '../../models/Font';
import FontOrder, { PaypalPayment, PixPayment } from '../../models/FontOrder';
import FontPrice from '../../models/FontPrice';
import License from '../../models/License';
import { LocaleCode, Localizer } from '../../models/Locale';
import { PaymentMethod } from '../../models/PaymentMethod';
import styles from '../../styles/BuyFontPanel.module.scss';
import FormFieldRadioGroup from '../FormFieldRadioGroup';
import LicenseePanel, { LicenseePanelData } from './LicenseePanel';
import PaypalPanel from './PaypalPanel';
import PixPanel, { PixPanelChangeDataHandler } from './PixPanel';

const buyFontPanelI18nKey = 'BuyFontPanel'
const buyFontPanelI18n = [buyFontPanelI18nKey]

type Props = {
	font: Font,
	license: License,
	fontPrice: FontPrice,
};

const BuyFontPanel: FunctionComponent<Props> = (props) => {

	const [opened, setOpened] = useState(false)
	const openButtonClicked = () => setOpened(true)
	const cancelButtonClicked = () => setOpened(false)

	const localizer = Localizer.make(useRouter());
	const { t } = useTranslation(buyFontPanelI18nKey)



	const [paymentMethod, setPaymentMethod] = useState(localizer.getLocale().code === LocaleCode.Br ? PaymentMethod.Pix : PaymentMethod.PayPal);
	const paymentMethodChanged = (value: string) => {
		setPaymentMethod((value === PaymentMethod.Pix.toString()) ? PaymentMethod.Pix : PaymentMethod.PayPal);
		// order.payment.method = paymentMethod
	}

	const [licenseePanelData, setLicenseePanelData] = useState<LicenseePanelData>()

	const [pixPayment, setPixPayment] = useState<PixPayment>();
	const [paypalPayment, setPaypalPayment] = useState<PaypalPayment>();

	const finishButtonDisabled = () => licenseePanelData?.isInvalid() || (order.payment.method === undefined) || ((order.payment.method === PaymentMethod.Pix) && (pixPayment === undefined))

	const order: FontOrder = {
		fontName: props.font.name,
		licenseName: props.license.name,
		quantity: 1,
		licensee: {
			name: useMemo(() => licenseePanelData?.fullName ?? '', [licenseePanelData]),
			email: useMemo(() => licenseePanelData?.email ?? '', [licenseePanelData]),
		},
		payment: {
			amount: localizer.getValue(props.fontPrice.price).amount,
			currency: localizer.getLocale().currency,
			method: useMemo(() => paymentMethod, [paymentMethod]),
			pix: useMemo(() => pixPayment, [pixPayment]),
			paypal: useMemo(() => paypalPayment, [paypalPayment]),
		},
	};

	const formSubmited: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault()

		const endpoint = '/api/buy-font'
		const options = {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(order),
		}

		const response = await fetch(endpoint, options)

		const result = await response.json()

		console.log(result.saved)
		alert(result.saved)
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
						<LicenseePanel onChange={setLicenseePanelData}/>

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
									<td><Trans t={t} i18nKey='Resume.fontName' values={{name: props.font?.name}}>Font Eldes {props.font?.name}</Trans> - <Trans t={t} i18nKey='Resume.licenseName' values={{name: props.license?.name}}>{props.license?.name} License</Trans></td>
									<td><Trans t={t} i18nKey='Resume.unit' count={order.quantity}>{order.quantity} unit</Trans></td>
									<td>{localizer.getValue(props.fontPrice.price).currency.symbol} {localizer.getValue(props.fontPrice.price).amount}</td>
								</tr>
							</tbody>
						</table>
					</div>
					{
						(licenseePanelData) && (licenseePanelData.isValid()) &&
						<div className={styles.formBody}>
							<h5 className={styles.formSectionTitle}>Forma de pagamento</h5>
						{
							localizer.getLocale().code === LocaleCode.Br &&
							<FormFieldRadioGroup
								name='paymentMethod'
								onChange={paymentMethodChanged}
								formFieldProps={[
									{
										label: 'Pix',
										value: PaymentMethod.Pix.toString(),
										disabled: licenseePanelData.isInvalid(),
									},
									{
										label: 'PayPal',
										value: PaymentMethod.PayPal.toString(),
										disabled: licenseePanelData.isInvalid(),
									},
								]}
								value={paymentMethod}
							/>
						}

						{
							(paymentMethod === PaymentMethod.Pix) &&
							<PixPanel code={props.fontPrice.pixCode} onChange={setPixPayment} />
						}

						{
							((paymentMethod === PaymentMethod.PayPal) || (localizer.getLocale().code === LocaleCode.En)) &&
							<PaypalPanel price={props.fontPrice} onChange={setPaypalPayment} />
						}
						</div>
					}

					<div className={styles.formFooter}>
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

export default BuyFontPanel;
export {
	buyFontPanelI18n,
	buyFontPanelI18nKey,
	PaymentMethod,
};