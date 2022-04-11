import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  saved: boolean
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data>) => {
    console.log(req.body)




    

    return res.status(200).json({
      saved: true
    })
}

export default handler