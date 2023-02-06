import connectMongo from '../../../utils/connectMongo';
import User from '../../../models/user';
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

export default async function Register(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await connectMongo();
	const { method, body } = req;
	const { email, password, firstName, lastName, ipAddress} = body;
	if (email && password && firstName && lastName && ipAddress) {
		switch (method) {
			case 'POST':
				try {
					//Check if user is already in db
					const userExist = await User.findOne({ email });

					//hash password for create user
					const salt = await bcrypt.genSalt(10);

					// hash the pasword
					const hashedPassword: string = await bcrypt.hash(password, salt);
					if (userExist) {
						return res.json({ user: false });
					} else {
						const user = await User.create({
							email,
							password: hashedPassword,
							firstName,
							lastName,
							ipAddress,
						});
						return res.json({ user });
					}

				} catch (reason) {
					return res.status(500).json({ login: `Error in GET. ${reason}` });
				}
				break;
			default:
				return res
					.status(200)
					.json({ register: 'This route is not set up yet!' });
		}
	} else {
		return res.status(400).json({ register: 'MISSING FEILD' });
	}
}
