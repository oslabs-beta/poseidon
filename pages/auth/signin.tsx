import { useState } from 'react';
import { signIn, getCsrfToken } from 'next-auth/react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../../public/LOGO-FINAL.svg';
export default function SignIn({ csrfToken }: any): JSX.Element {
  const router = useRouter();
  const [error, setError] = useState(null);

  return (
    <>
      <Head>
        <title className="text-slate-200 text-2xl ">Sign In</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LogoPNG.png" />
      </Head>

      <Formik
        initialValues={{ 
          email: '', 
          password: '', 
          tenantKey: '' 
        }}

        validationSchema={Yup.object({
          email: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .email('Invalid email address')
            .required('Please enter your email'),
          password: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .required('Please enter your password'),
        })}

        onSubmit={async (values, { setSubmitting }) => {
          const res: any = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: `${window.location.origin}`,
          });
          if (res?.error) {
            setError(res.error);
          } else {
            setError(null);
          }
          if (res.url) router.push(res.url);
          setSubmitting(false);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="bg-slate-900 flex flex-col items-center justify-center min-h-screen py-2 shadow-lg">
              <div
                className="pt-10 relative z-10 col-span-3 bg-slate-800 rounded-xl xl:ml-0 dark:ring-1 dark:ring-inset dark:ring-white/10 p-5  shadow-neutral-900 shadow-2xl space-y-2"
                >
                <Image
                  className="mx-auto hover:animate-[spin_6s_linear_infinite]"
                  src={Logo}
                  alt="Logo"
                  width={200}
                  height={200}
                />

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

                <input
                  name="csrfToken"
                  type="hidden"
                  defaultValue={csrfToken}
                />

                <div className="text-red-400 text-md text-center rounded p-2">
                  {error}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="uppercase text-sm text-gray-600 font-bold"
                  >
                    Email
                    <Field
                      name="email"
                      aria-label="enter your email"
                      aria-required="true"
                      type="text"
                      // className="w-full bg-gray-300 text-gray-900 mt-2 p-3"
                      className={`${
                        error ? 'border-red-500' : ''
                      } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    />
                  </label>

                  <div className="text-red-500 text-sm animate-pulse">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="uppercase text-sm text-gray-600 font-bold"
                  >
                    password
                    <Field
                      name="password"
                      aria-label="enter your password"
                      aria-required="true"
                      type="password"
                      // className="w-full bg-gray-300 text-gray-900 mt-2 p-3"
                      className={`${
                        error ? 'border-red-500' : ''
                      } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    />
                  </label>

                  <div className="text-red-500 text-sm animate-pulse">
                    <ErrorMessage name="password" />
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="mt-4 p-5 bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 hover:scale-110 hover:accent-white"
                  >
                    {formik.isSubmitting ? 'Please wait...' : 'Sign In'}
                  </button>
                </div>
                
                {/* SWITCH TO SIGN UP PAGE */}
                <div className="flex items-center justify-center pt-2">
                  <span>
                    <p className="text-slate-500 mr-3">
                      {' '}
                      Don't have an account?{' '}
                    </p>
                  </span>
                  <a
                    href="/register"
                    className=" ml-5 mt-1 text-sm hover:text-sky-500 font-medium group text-slate-500 transition duration-300"
                  >
                    <p className="text-slate-200">Sign Up</p>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                  </a>
                </div>

              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
