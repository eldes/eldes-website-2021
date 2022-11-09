import axios from 'axios';
import { Trans, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FormEventHandler, FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';
import Font from '../../models/Font';
import FontOrder, { PaypalPayment, PixPayment } from '../../models/FontOrder';
import FontPrice from '../../models/FontPrice';
import License from '../../models/License';
import { LocaleCode, Localizer } from '../../models/Locale';
import Logotype from '../../models/Logotype';
import { PaymentMethod } from '../../models/PaymentMethod';
import { BuyFontResult } from '../../pages/api/buy-font';
import styles from '../../styles/BuyFontPanel.module.scss';
import FormFieldRadioGroup from '../FormFieldRadioGroup';
import LicenseePanel, { LicenseePanelData } from './LicenseePanel';
import LogotypePanel from './LogotypePanel';
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

	const localizer = Localizer.make(useRouter());
	const { t } = useTranslation(buyFontPanelI18nKey)

	const [paymentMethod, setPaymentMethod] = useState(localizer.getLocale().code === LocaleCode.Br ? PaymentMethod.Pix : PaymentMethod.PayPal);
	const paymentMethodChanged = (value: string) => {
		setPaymentMethod((value === PaymentMethod.Pix.toString()) ? PaymentMethod.Pix : PaymentMethod.PayPal);
	}

	const [licenseePanelData, setLicenseePanelData] = useState<LicenseePanelData>()

  const [logotype, setLogotype] = useState<Logotype>()

	const [pixPayment, setPixPayment] = useState<PixPayment>();
	const [paypalPayment, setPaypalPayment] = useState<PaypalPayment>();

	const finishButtonDisabled = () => licenseePanelData?.isInvalid() || (order.payment.method === undefined) || ((order.payment.method === PaymentMethod.Pix) && (pixPayment === undefined)) || ((order.payment.method === PaymentMethod.PayPal) && (paypalPayment === undefined))

  const [buyFontResult, setBuyFontResult] = useState<BuyFontResult>();

	const order: FontOrder = useMemo(() => {
    return {
      fontName: props.font.name,
      licenseName: props.license.name,
      quantity: 1,
      licensee: {
        name: licenseePanelData?.fullName ?? '',
        email: licenseePanelData?.email ?? '',
      },
      logotype: logotype,
      payment: {
        amount: localizer.getValue(props.fontPrice.price).amount,
        currency: localizer.getLocale().currency,
        method: paymentMethod,
        pix: pixPayment,
        paypal: paypalPayment,
      },
    }
  }, [licenseePanelData, localizer, logotype, paymentMethod, paypalPayment, pixPayment, props.font.name, props.fontPrice.price, props.license.name]);

  const [opened, setOpened] = useState(false)
	const open = () => {
    setPaymentMethod(localizer.getLocale().code === LocaleCode.Br ? PaymentMethod.Pix : PaymentMethod.PayPal);
    setLicenseePanelData(undefined);
    setLogotype(undefined);
    setPixPayment(undefined);
    setBuyFontResult(undefined);
    setOpened(true)
  };
  const close = () => setOpened(false);

  const [progress, setProgress] = useState(false);
  
  const buyFont = () => {
    setProgress(true);
    setBuyFontResult(undefined)

		const endpoint = '/api/buy-font';
    axios.post(endpoint, order)
    .then((response) => {
      setBuyFontResult(response.data);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setProgress(false);
    });
  };

	const formSubmited: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
    buyFont();
	};

  useEffect(() => {
    if (paypalPayment) {
      buyFont();
    }
  }, [paypalPayment]);

	return (
		<div className={ styles.buyFontPanel }>
			{
				(! opened) && <button onClick={ open }><Trans t={t} i18nKey='buyTitle'>Buy</Trans></button>
			}
			{
        opened && buyFontResult && buyFontResult.saved && (
          <form>
            <div className={styles.formHeader}>
              <h4 className={styles.formTitle}>Sucesso</h4>
              <p>{licenseePanelData?.fullName}, obrigado pela compra. Assim que os dados forem processados os arquivos serão enviados para o seu e-mail ({licenseePanelData?.email}).</p>
            </div>

            <div className={styles.formFooter}>
              <div className={styles.buttonsPanel}>
                <button type='button' onClick={close}>Close</button>
              </div>
            </div>
          </form>
        )
      }
      {
        opened && buyFontResult && buyFontResult.error && (
          <form onSubmit={formSubmited}>
            <div className={styles.formHeader}>
              <h4 className={styles.formTitle}>Opa!</h4>
              <p>{licenseePanelData?.fullName}, infelizmente houve algum erro na tentativa de envio dos seus dados <small>({buyFontResult.error.message})</small>. Por favor tente enviar novamente ou entre em contato com o autor (studio@eldes.com).</p>
            </div>

            <div className={styles.formFooter}>
              <div className={styles.buttonsPanel}>
                <button type='button' className={ styles.secundary } onClick={close}>Close</button>
                <button type='submit'>Enviar</button>
              </div>
            </div>
          </form>
        )
      }
      {
				opened && !buyFontResult && (
          <form onSubmit={formSubmited}>
            <div className={styles.formHeader}>
              <h4 className={styles.formTitle}><Trans t={t} i18nKey='buyTitle'>Buy</Trans></h4>
              <p><Trans t={t} i18nKey='fillMessage'>Please fill in the LICENSEE data, that is, the owner of the computer where the font will be installed and used.</Trans></p>
            </div>

            <div className={styles.formBody}>
              <h5 className={styles.formSectionTitle}>Dados do licenciado:</h5>
              <LicenseePanel onChange={setLicenseePanelData}/>
            </div>
            {
              (props.license.slug === 'logotype-license') &&
              <div className={styles.formBody}>
                <h5 className={styles.formSectionTitle}>Dados do logotipo:</h5>
                <LogotypePanel onChange={setLogotype} />
              </div>
            }

            <div className={styles.formBody}>

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
              {
                progress && (
                  <div className={styles.progressPanel} />
                )
              }
              {
                !progress && (
                  <div className={styles.buttonsPanel}>
                    <button className={ styles.secundary } onClick={ close }><Trans t={t} i18nKey='cancelButtonText'>Cancel</Trans></button>
                    <button type='submit' disabled={finishButtonDisabled()}><Trans t={t} i18nKey='finishButtonText'>Finish</Trans></button>
                  </div>
                )
              }
            </div>
          </form>
        )
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