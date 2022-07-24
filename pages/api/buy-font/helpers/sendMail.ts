import SendGridHelpers from '@sendgrid/helpers';
import SendGridMail from '@sendgrid/mail';

type Message = {
  from: string,
  subject: string,
  to: string,
  html: string,
  cc?: string,
  text?: string,
  attachments?: Attachment[]
};

type Attachment = {
  base64Content: string;
  filename: string;
  type: string;
};

const sendMail = (message: Message) => new Promise((resolve, reject) => {

  const sendGridAttachments: SendGridHelpers.classes.Attachment[] = []; 
  message.attachments?.forEach(attachment => {
    const sendGridAttachment = new SendGridHelpers.classes.Attachment();
    sendGridAttachment.setContent(attachment.base64Content);
    sendGridAttachment.setFilename(attachment.filename);
    sendGridAttachment.setType(attachment.type);
    sendGridAttachment.setDisposition('attachment');
    sendGridAttachments.push(sendGridAttachment);
  });

  SendGridMail.setApiKey(process.env.SENDGRID_API_KEY || '');
  const mailData: SendGridMail.MailDataRequired = {
    from: message.from,
    to: message.to,
    cc: message.cc,
    subject: message.subject,
    html: message.html,
    attachments: sendGridAttachments,
  };

  SendGridMail.send(mailData)
  .then(resolve)
  .catch(error => reject(error))
});

export default sendMail;
export type {
  Message,
  Attachment,
}