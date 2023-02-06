import connectMongo from '../../../utils/connectMongo';
import Test from '../../../models/test';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  // next typing for arguments
  req: NextApiRequest,
  res: NextApiResponse
) {
  // connected to mongoDB first
  await connectMongo();
  // destructured req to get method & body
  const { method, body } = req;

  // clean switch cases for requests
  switch (method) {
    case 'POST':
      try {
        const test = await Test.create(body);
        // console.log('created user', test);
        res.json({ test });
      } catch (error) {
        console.log(error);
        res.json({ error });
      }
      break;
    case 'GET':
      try {
        const test = await Test.findOne(body);
        // console.log('found user', test);
        res.json({ test });
      } catch (error) {
        console.log(error);
        res.json({ error });
      }
      break;
    // handle other HTTP methods
    default:
      res.status(200).json({ message: 'This route is not set up yet!'})
  }
}