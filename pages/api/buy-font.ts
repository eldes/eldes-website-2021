import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { MailOptions } from 'nodemailer/lib/smtp-transport';
import FontOrder from '../../models/FontOrder';
import PaymentMethod from '../../models/PaymentMethod';

type ResponseData = {
  saved: boolean
  error?: Error
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>) => {
    const fontOrder: FontOrder = req.body

    const attachments: Mail.Attachment[] = []

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      auth: {
        user: 'eldes@eldes.com',
        pass: 'zebMWD4NyJj.!Lt7Cub!',
      },
    });

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
      ${logotypeHtml}
      ${paymentHtml}
    `;

    if (fontOrder.payment.method === PaymentMethod.Pix.toString()) {
      const today = new Date()
      const attachmentFilename = `pix-${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}.${fontOrder.payment.pix?.receiptFile.type.split('/')[1]}`;
      attachments.push({
        filename: attachmentFilename,
        path: fontOrder.payment.pix?.receiptFile.base64,
      });
    } else { //PayPal
      html = `
        ${html}
        ${paypalHtml}
      `;
    }
    
    const options: MailOptions = {
      from: 'eldes@eldes.com',
      to: 'studio@eldes.com',
      subject: fontOrder.fontName,
      text: `
        PEDIDO DE LICENÇA:
        ${fontOrder.fontName}
        ${fontOrder.licenseName}
        1 unidade
        Pagamento: ${fontOrder.payment.method.toString()}
        Nome: ${fontOrder.licensee?.name}
        E-mail: ${fontOrder.licensee?.email}
      </div>
    `,
      html,
      attachments: attachments,
    }

    transporter.sendMail(options, (err, info)=> {
      if (err) {
        return res.status(400).json({saved: false, error: err})
      } else {
        return res.status(200).json({saved: true})
      }
    })

    return res.status(200).json({
      saved: true
    })
}

export default handler;
export {
  type ResponseData as BuyFontResult,
};