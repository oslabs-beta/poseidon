'use client';
import {
  Formik,
  Field,
  Form,
  FormikHelpers,
  useField,
  ErrorMessage,
} from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';


// NOT BEING USED ANYMORE

const Input = ({ name, label, ...props }: any) => {
  const [field, meta] = useField(name);
  return (
    <div className="m-2">
      <input
        className={`${
          meta.error && meta.touched ? 'border-red-500' : ''
        } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-500 text-xs"
      />
    </div>
  );
};

export default function LoginForm() {
  const [error, setError] = useState('');
  const router = useRouter();
  const loginUser = async (body: LoginValues) => {
    try {
      const res = await fetch(`/api/user/login`, {
        method: 'POST',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const { user } = await res.json();
      // if data present - redirect to dashboard
      if (user) {
        setError('');
        router.push(`/`);
      } else {
        // user is not in the db - route to sign up page
        // NEED TO ADD MESSAGE EXPLAINING WHAT TO DO + WHY
        setError('error');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="div1 ">
        <div className="div2 ">
          <section>
            <div className="content">
              <h2 className="font-extrabold">POSEIDON</h2>
              <h2 className="font-extrabold">POSEIDON</h2>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-slate-800 container mx-auto w-80 flex justify-center rounded">
        <div className="flex-col align-center">
          <h1 className="flex-col align-center m-3 font-bold text-lg text-slate-200">
            Login
          </h1>
          {error ? (
            <h6 className="error">Username or Password is incorrect</h6>
          ) : (
            <></>
          )}
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .min(5, 'Must be at least 5 characters')
                .required('Required'),
              password: Yup.string()
                .min(5, 'Must be at least 5 characters')
                .required('Required'),
            })}
            onSubmit={(
              values: LoginValues,
              { setSubmitting }: FormikHelpers<LoginValues>
            ) => {
              console.log('onSubmit', values);
              loginUser(values);
              setSubmitting(false);
            }}
          >
            <Form>
              <Input
                name="email"
                label="Email"
                id="email"
                placeholder="Email"
                aria-describedby="usernameHelp"
              />
              <Input
                name="password"
                label="Password"
                type="password"
                id="password"
                placeholder="Password"
              />
              <div className=" flex items-stretch justify-center ">
                <button
                  type="submit"
                  className="mt-4 p-5 bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 hover:scale-110 hover:accent-white"
                >
                  Login
                </button>
              </div>
              <hr className="w-49 h-0.5 mx-auto bg-gray-100 border-0 rounded md:mt-8 mb-3 mr-3 ml-3 dark:bg-gray-700" />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
