import path from 'path';
import FontOrder from '../../../../models/FontOrder';
import { Locales } from '../../../../models/Locale';
import fromTemplate from './from-template';
import sendMail, { Message } from './sendMail';

const sendNotificationToBuyerOnOder = (fontOrder: FontOrder) => new Promise<void>((resolve, reject) => {
  //TODO: i18n
  if (fontOrder.payment.currency !== Locales.br.currency) {
    resolve();
  }
  
  const filename = 'notification-to-buyer-on-order-br.html';
  const filePath = path.join(process.cwd(), 'pages', 'api', 'buy-font', 'helpers', filename);
  fromTemplate(filePath, [
    {
      name: 'FULL_NAME',
      value: fontOrder.licensee.name
    },
    {
      name: 'EMAIL',
      value: fontOrder.licensee.email
    },
  ])
  .then(html => {
    const message: Message = {
      from: 'studio@eldes.com',
      to: fontOrder.licensee.email,
      subject: `Fonte Eldes ${fontOrder.fontName}`,
      html,
    };

    sendMail(message)
    .then(() => resolve())
    .catch(error => reject(error));
  })
  .catch(error => reject(error))
});

export default sendNotificationToBuyerOnOder;