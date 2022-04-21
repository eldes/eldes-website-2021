import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport, { MailOptions } from 'nodemailer/lib/smtp-transport';
import { PaymentMethodEnum, RequestData } from '../../components/BuyFontPanel';

type ResponseData = {
  saved: boolean
  error?: Error
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>) => {
    const requestData: RequestData = req.body

    const attachments: Mail.Attachment[] = []

    if (requestData.paymentMethod === PaymentMethodEnum.Pix.toString()) {
      const today = new Date()
      const attachmentFilename = `pix-${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}.${requestData.pix?.receiptFileType.split('/')[1]}`
      attachments.push({
        filename: attachmentFilename,
        path: requestData.pix?.receiptFileBase64,
      })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      auth: {
        user: 'eldes@eldes.com',
        pass: '-ofumJisGUePrvH6',
      },
    })
    
    const options: MailOptions = {
      from: 'eldes@eldes.com',
      to: 'studio@eldes.com',
      subject: requestData.fontName,
      text: `
        PEDIDO DE LICENÇA:
        ${requestData.fontName}
        ${requestData.licenseName}
        1 unidade
        Pagamento: ${requestData.paymentMethod.toString()}
        Nome: ${requestData.licensee?.fullName}
        E-mail: ${requestData.licensee?.email}
      </div>
    `,
      html: `
        <div>
          <p>Pedido de licença:</p>
          <ul>
            <li>${requestData.fontName}</li>
            <li>${requestData.licenseName}</li>
            <li>1 unidade</li>
            <li>Pagamento: ${requestData.paymentMethod.toString()}</li>
            <li>Nome: ${requestData.licensee?.fullName}</li>
            <li>E-mail: ${requestData.licensee?.email}</li>
          </ul>
        </div>
      `,
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

export default handler