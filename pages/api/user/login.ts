// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from '../../../utils/connectMongo';
import User from '../../../models/user';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function Login( req: NextApiRequest, res: NextApiResponse ) {
  await connectMongo();
  const { method, body } = req;
  const { email, password } = body;
  if (email && password) {
    switch (method) {
      case 'GET':
        try {
          const user = await User.findOne({email});
          // console.log('L15', user);
          return (user) ? res.status(200).json({user}) : res.redirect(307, '/register');
        } catch(reason) { return res.status(500).json({ login: `Error in GET. ${reason}`}); }
        break;
      default:
        return res.status(200).json({ login: 'This route is not set up yet!'});
    }
  } else {
    return res.status(400).json({ login: 'MISSING FEILD' });
  }
};