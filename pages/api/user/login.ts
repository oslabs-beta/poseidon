// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from '../../../utils/connectMongo';
import User from '../../../models/user';
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

export default async function Login(req: NextApiRequest, res: NextApiResponse) {

  /* Connecting to the mongo database. */
  await connectMongo();


  /* Destructuring the request object. */
  const { method, body } = req;
  const { email, password } = body;


  /* Checking to see if the email and password are present. */
  if (email && password) {
    switch (method) {
      case 'POST':
        try {
          /* Finding the user in the database. */
          const user = await User.findOne({ email });

          // need to handle incorrect password
          if (user && (await bcrypt.compare(password, user.password))) {
            return res.json({ user });
          } else {
            return res.json({ message: 'User not authorized.' });
          }
        } catch (reason) {
          return res.status(500).json({ login: `Error in GET. ${reason}` });
        }
        break;
      default:
        return res.status(200).json({ login: 'This route is not set up yet!' });
    }
  } else {
    return res.status(400).json({ login: 'MISSING FEILD' });
  }
}
