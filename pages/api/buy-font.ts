import SendGridHelpers from '@sendgrid/helpers';
import SendGridMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';
import FontOrder from '../../models/FontOrder';

type ResponseData = {
  saved: boolean
  error?: Error
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const fontOrder: FontOrder = req.body

  const attachments: SendGridHelpers.classes.Attachment[] = [];

  const fontHtml = `
    <h2>Fonte</h2>
    <ul>
      <li>Fonte: ${fontOrder.fontName}</li>
      <li>Licença: ${fontOrder.licenseName}</li>
      <li>Quantidade: ${fontOrder.quantity} unidade</li>
    </ul>
  `;

  const licenseeHtml = `
    <h2>Licenciado</h2>
    <ul>
      <li>Nome: ${fontOrder.licensee.name}</li>
      <li>E-mail: ${fontOrder.licensee.email}</li>
    </ul>
  `;

  const logotypeHtml = `
    <h2>Logotipo</h2>
    <ul>
      <li>Nome da marca: ${fontOrder.logotype?.name}</li>
    </ul>
  `;

  const paymentHtml = `
    <h2>Pagamento</h2>
    <ul>
      <li>Valor: ${fontOrder.payment.currency.symbol} ${fontOrder.payment.amount}</li>
      <li>Método: ${fontOrder.payment.method}</li>
    </ul>
  `;

  const paypalHtml = `
    <h2>PayPal</h2>
    <ul>
      <li>ID: ${fontOrder.payment.paypal?.id}</li>
      <li>Nome: ${fontOrder.payment.paypal?.payer.givenName} ${fontOrder.payment.paypal?.payer.surname}</li>
      <li>E-mail: ${fontOrder.payment.paypal?.payer.email}</li>
      <li>User ID: ${fontOrder.payment.paypal?.payer.id}</li>
      <li>País: ${fontOrder.payment.paypal?.payer.address.countryCode}</li>
    </ul>
  `;

  let html = `
    <h1>Pedido de Licença</h1>
    ${fontHtml}
    ${licenseeHtml}
    ${fontOrder.logotype ? logotypeHtml : ''}
    ${paymentHtml}
  `;

  if (fontOrder.payment.pix) {
    const today = new Date()
    const attachmentFilename = `pix-${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}.${fontOrder.payment.pix?.receiptFile.type.split('/')[1]}`;

    const attachment = new SendGridHelpers.classes.Attachment();
    attachment.setContent(fontOrder.payment.pix.receiptFile.base64);
    attachment.setFilename(attachmentFilename);
    attachment.setType(fontOrder.payment.pix.receiptFile.type);
    attachment.setDisposition('attachment');
    attachments.push(attachment);
  } else { //PayPal
    html = `
      ${html}
      ${paypalHtml}
    `;
  }

  SendGridMail.setApiKey(process.env.SENDGRID_API_KEY || '');
  const mailData: SendGridMail.MailDataRequired = {
    to: 'contact@salander.agency',
    cc: 'studio@eldes.com',
    from: 'studio@eldes.com',
    subject: fontOrder.fontName,
    text: `
      PEDIDO DE LICENÇA:
      ${fontOrder.fontName}
      ${fontOrder.licenseName}
      1 unidade
      Pagamento: ${fontOrder.payment.method.toString()}
      Nome: ${fontOrder.licensee?.name}
      E-mail: ${fontOrder.licensee?.email}
    `,
    html: html,
    attachments: attachments,
  };

  const responseData: ResponseData = {
    saved: false,
    error: new Error('ERRO#01'),
  };

  SendGridMail.send(mailData)
  .then(() => {
    responseData.saved = true;
    responseData.error = undefined;
    res.status(200).json(responseData);
  })
  .catch(error => {
    responseData.saved = false;
    responseData.error = new Error('ERRO#02');
    res.status(400).json(responseData);
  })
}

export default handler;
export {
  type ResponseData as BuyFontResult,
};