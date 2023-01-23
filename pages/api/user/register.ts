import connectMongo from '../../../utils/connectMongo';
import User from '../../../models/user';
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

export default async function Register(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// console.log('in register!');
	await connectMongo();
	const { method, body } = req;
	const { email, password, firstName, lastName } = body;
	if (email && password && firstName && lastName) {
		switch (method) {
			// console.log('in between');
			case 'POST':
				try {
					//Check if user is already in db
					const userExist = await User.findOne({ email });

					//hash password for create user
					const salt = await bcrypt.genSalt(10);
					// console.log('This is salt!', salt);

					// hash the pasword
					const hashedPassword: string = await bcrypt.hash(password, salt);
					// console.log('userExist:', userExist);
					if (userExist) {
						return res.json({ user: false });
					} else {
						const user = await User.create({
							email,
							password: hashedPassword,
							firstName,
							lastName,
						});
						// console.log('userExist:', userExist);
						return res.json({ user });
					}

					// const user =
					//   check ??
					//   (await User.create({
					//     email,
					//     password: hashedPassword,
					//     firstName,
					//     lastName,
					//   }));
					// // alert that an account already exists with the input email, should direct to login.
					// return check
					//   // if the user is already in the db
					//   ? res.redirect(307, '/login')
					//   //
					//   : res.status(201).json({ user });
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
		// console.log('Register: MISSING FEILD');
		return res.status(400).json({ register: 'MISSING FEILD' });
	}
}
