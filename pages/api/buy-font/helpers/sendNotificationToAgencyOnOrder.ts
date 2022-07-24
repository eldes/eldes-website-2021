import path from 'path';
import FontOrder from '../../../../models/FontOrder';
import fromTemplate from './from-template';
import sendMail, { Attachment, Message } from './sendMail';

const sendNotificationToAgencyOnOrder = (fontOrder: FontOrder) => new Promise<void>((resolve, reject) => {

  const filename = 'notification-to-agency-on-order.html';
  const filePath = path.join(process.cwd(), 'pages', 'api', 'buy-font', 'helpers', filename);
  fromTemplate(filePath, [
    {
      name: 'FONT_NAME',
      value: fontOrder.fontName
    },
    {
      name: 'LICENSE_NAME',
      value: fontOrder.licenseName
    },
    {
      name: 'QUANTITY',
      value: fontOrder.quantity.toString(),
    },
    {
      name: 'LICENSEE_NAME',
      value: fontOrder.licensee.name,
    },
    {
      name: 'LICENSEE_EMAIL',
      value: fontOrder.licensee.email,
    },
    {
      name: 'LICENSEE_SERIAL_KEY',
      value: 'xxx',
    },
    {
      name: 'LOGOTYPE_NAME',
      value: fontOrder.logotype?.name ?? '(is not Logotype License)',
    },
    {
      name: 'PAYMENT_CURRENCY_SYMBOL',
      value: fontOrder.payment.currency.symbol,
    },
    {
      name: 'PAYMENT_AMOUNT',
      value: fontOrder.payment.amount.toString(),
    },
    {
      name: 'PAYMENT_METHOD',
      value: fontOrder.payment.method,
    },
    {
      name: 'PAYPAL_ID',
      value: fontOrder.payment.paypal?.id ?? '(is not PayPal)',
    },
    {
      name: 'PAYPAL_PAYER_GIVEN_NAME',
      value: fontOrder.payment.paypal?.payer.givenName ?? '(is not PayPal)',
    },
    {
      name: 'PAYPAL_PAYER_SURNAME',
      value: fontOrder.payment.paypal?.payer.surname ?? '(is not PayPal)',
    },
    {
      name: 'PAYPAL_PAYER_EMAIL',
      value: fontOrder.payment.paypal?.payer.email ?? '(is not PayPal)',
    },
    {
      name: 'PAYPAL_PAYER_ID',
      value: fontOrder.payment.paypal?.payer.id ?? '(is not PayPal)',
    },
    {
      name: 'PAYPAL_COUNTRY_CODE',
      value: fontOrder.payment.paypal?.payer.address.countryCode ?? '(is not PayPal)',
    },
  ])
  .then(html => {
    const attachments: Attachment[] = [];

    if (fontOrder.payment.pix) {
      const today = new Date()
      const attachmentFilename = `pix-${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}.${fontOrder.payment.pix?.receiptFile.type.split('/')[1]}`;
      attachments.push({
        base64Content: fontOrder.payment.pix.receiptFile.base64,
        filename: attachmentFilename,
        type: fontOrder.payment.pix.receiptFile.type
      });
    }

    const message: Message = {
      from: 'studio@eldes.com',
      to: 'contact@salander.agency',
      cc: 'studio@eldes.com',
      subject: `Fonte Eldes ${fontOrder.fontName}`,
      html,
      attachments,
    };

    sendMail(message)
    .then(() => resolve())
    .catch(error => reject(error))
  })
  .catch(error => reject(error))

});

export default sendNotificationToAgencyOnOrder;