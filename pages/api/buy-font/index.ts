import { NextApiRequest, NextApiResponse } from 'next';
import FontOrder from '../../../models/FontOrder';
import sendNotificationToAgencyOnOrder from './helpers/sendNotificationToAgencyOnOrder';
import sendNotificationToBuyerOnOder from './helpers/sendNotificationToBuyerOnOrder';

type ResponseData = {
  saved: boolean
  error?: Error
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const fontOrder: FontOrder = req.body

  const responseData: ResponseData = {
    saved: false,
    error: new Error('ERRO#01'),
  };

  sendNotificationToBuyerOnOder(fontOrder)
  .finally(() => {
    sendNotificationToAgencyOnOrder(fontOrder)
    .then(() => {
      responseData.saved = true;
      responseData.error = undefined;
      res.status(200).json(responseData);
    })
    .catch(() => {
      responseData.saved = false;
      responseData.error = new Error('ERRO#02');
      res.status(400).json(responseData);
    })
  });
}

export default handler;
export {
  type ResponseData as BuyFontResult,
};