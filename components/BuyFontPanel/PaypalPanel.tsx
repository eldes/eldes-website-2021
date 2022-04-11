import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { FunctionComponent } from 'react';
import FontPrice from '../../models/FontPrice';
import { LocaleEnum, useLocale } from '../../models/Locale';

type Props = {
  price: FontPrice
}

const PaypalPanel: FunctionComponent<Props> = (props) => {
  const locale = useLocale()
  
  return (
    <div>
      <PayPalScriptProvider
        options={{
          'client-id': 'AUTk1XwjVohgW0rAb2ch9a2Tg1-dxNQB_hbiAvs7uOw0gxchwusEXrypAwN3s9Ce-aSLtH4WCSwL5hLV',
          currency: (locale === LocaleEnum.br) ? 'BRL' : 'USD'
        }}
      >
      <PayPalButtons
        style={{ layout: 'horizontal' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: props.price.amount[locale].toString(),
                }
              }
            ]
            })
        }}
        onApprove={(data, actions) => {
          return actions.order?.capture().then(details => {
            const name = details.payer.name.given_name
            alert(`Transaction completed by ${name}`)
          })
        }}
      />
          </PayPalScriptProvider>
    </div>
  )
}

export default PaypalPanel