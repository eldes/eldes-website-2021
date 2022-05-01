import Licensee from './Licensee';
import PaymentMethod from './PaymentMethod';
import { Currency } from './Price';

type PixPayment = {
  receiptFile: {
    base64: string
    type: string
  }
}

type PaypalPayment = {
  id: string,
  payer: {
    givenName: string
    surname: string
    email: string
    id: string
    address: {
      countryCode: string
    }
  }
  status: string
  createTime: string
  updateTime: string
}

type FontOrder = {
  fontName: string
  licenseName: string
  quantity: number
  licensee: Licensee
  payment: {
    amount: number
    currency: Currency
    method: PaymentMethod
    pix?: PixPayment
    paypal?: PaypalPayment
  }
};

export default FontOrder;
export type {
  PixPayment,
  PaypalPayment,
};