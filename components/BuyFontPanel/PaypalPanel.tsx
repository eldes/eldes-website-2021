import { loadScript } from '@paypal/paypal-js';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';
import { PaypalPayment } from '../../models/FontOrder';
import FontPrice from '../../models/FontPrice';
import { Localizer } from '../../models/Locale';

type ChangeHandler = (paypalPayment: PaypalPayment) => void;

type Props = {
  price: FontPrice,
  onChange?: ChangeHandler,
};

const PaypalPanel: FunctionComponent<Props> = (props) => {
  const localizer = Localizer.make(useRouter());

  return (
    <div>
      <PayPalScriptProvider options={{
          'client-id': process.env.PAYPAL_CLIENT_ID ||'AUTk1XwjVohgW0rAb2ch9a2Tg1-dxNQB_hbiAvs7uOw0gxchwusEXrypAwN3s9Ce-aSLtH4WCSwL5hLV',
          currency: localizer.getLocale().currency.code
      }}>
        <PayPalButtons
          style={{layout: 'horizontal'}}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: localizer.getValue(props.price.price).amount.toString(),
                  }
                }
              ]
            })
          }}
          onApprove={(data, actions) => {
            return actions.order!.capture()
            .then((details) => {
              console.log(details)
              const name = details.payer.name.given_name
              if (props.onChange) {
                props.onChange({
                  id: details.id,
                  payer: {
                    givenName: details.payer.name.given_name,
                    surname: details.payer.name.surname,
                    email: details.payer.email_address,
                    id: details.payer.payer_id,
                    address: {
                      countryCode: details.payer.address.country_code
                    }
                  },
                  status: details.status,
                  createTime: details.create_time,
                  updateTime: details.update_time,
                });
              }
            })
          }}
        />
      </PayPalScriptProvider>
    </div>
  )
}

export default PaypalPanel