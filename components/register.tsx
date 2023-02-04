'use client';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from "yup";
import { Input } from './input';


export default function RegisterForm() {
	const router = useRouter();
	const loginUser = async (body: RegisterValues) => {
		try {
			const res = await fetch(`/api/user/register`, {
				method: 'POST',
				headers: {
					Accept: 'application.json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			});
			// if data present - redirect to dashboard
			const { user } = await res.json();
			// if data present - redirect to dashboard
			if (user) {
        // may need to route to login to confirm they know their information
				router.push(`/`);
			} else {
				// user is not in the db - route to sign up page
				// NEED TO ADD MESSAGE EXPLAINING WHAT TO DO + WHY
				router.push(`/login`);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
		<div className='div1 '>
			<div className='div2 '>
				<section>
					<div className="content">
						<h2 className='font-extrabold'>POSEIDON</h2>
						<h2 className='font-extrabold'>POSEIDON</h2>
					</div>
				</section>
			</div>
      	</div>
		<div className='bg-slate-800 container mx-auto w-80 flex justify-center rounded'>
			<div className="flex-col align-center">
			<h1 className="flex-col align-center m-3 font-bold text-lg text-slate-200">
					Register
				</h1>
				<Formik
					initialValues={{
						email: '',
						password: '',
						lastName: '',
						firstName: '',
					}}
          validationSchema={Yup.object({
            email: Yup.string()
              .min(5, "Must be at least 5 characters")
							.max(30, 'Must be 30 characters or less')
              .required("Required")
            	.email('Invalid email address'),
            password: Yup.string()
              .min(5, "Must be at least 5 characters")
							.max(30, 'Must be 30 characters or less')
              .required("Required"),
            lastName: Yup.string()
              .required("Required")
							.max(30, 'Must be 30 characters or less'),
            firstName: Yup.string()
              .required("Required")
							.max(30, 'Must be 30 characters or less'),
          })}
					onSubmit={(
						values: RegisterValues,
						{ setSubmitting }: FormikHelpers<RegisterValues>
					) => {
						loginUser(values);
						setSubmitting(false);
						// setTimeout(() => {
						//   alert(JSON.stringify(values, null, 2));
						//   setSubmitting(false);
						// }, 500);
					}}
				>
					<Form>
						{/* first name input */}
						<div>
							<Input
                id="firstName"
								name="firstName"
								placeholder="First Name"
								aria-describedby="usernameHelp"
              />
						</div>

						{/* last name input */}
						<div>
							<Input
								id="lastName"
								name="lastName"
								placeholder="Last Name"
								aria-describedby="usernameHelp"
              />
						</div>

						{/* email input */}
						<div>
							<Input
								id="email"
								name="email"
								placeholder="Email"
								aria-describedby="usernameHelp"
              />
						</div>

						{/* password input */}
						<div>
							<Input
								id="password"
								name="password"
								placeholder="Password"
								type="password"
              />
						</div>
						
            {/* MAY WANT TO HAVE FIELD TO CONFIRM PASSWORD and give feedback on the info marching up */}
						<div className="flex justify-center mt-5">
							<button
								type="submit"
								// disabled={!input}
								className='bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 hover:scale-110 hover:accent-white'
							>
								Register
							</button>
						</div>
						<hr className="w-49 h-0.5 mx-auto bg-gray-100 border-0 rounded md:mt-6 mb-3 mr-3 ml-3 dark:bg-gray-700" />
					</Form>
				</Formik>
			</div>
		</div>
		</div>
	);
}
