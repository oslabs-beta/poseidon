'use client'
import { Formik, Field, Form, FormikHelpers} from 'formik';
import * as Yup from "yup";

interface Values {
  email: string;
  password: string;
}

export default function LoginForm() {

  const loginUser = async (body: Values) => {
    try {
      const res = await fetch(`/api/user/login`, {
        method: 'POST',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
      })
      const data = await res.json();
      // if data present - redirect to dashboard
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='bg-slate-600 container mx-auto w-80 flex justify-center rounded'>
      <div className='flex-col align-center'>
        <h1 className="flex-col align-center m-3 font-bold text-lg ">Login</h1>
        <Formik
          initialValues={{
              email: '',
              password: '',
          }}
          // validationSchema={Yup.object({
          //   username: Yup.string()
          //     .min(5, "Must be at least 5 characters")
          //     .required("Required"),
          //   password: Yup.string()
          //     .min(5, "Must be at least 5 characters")
          //     .required("Required"),
          // })}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
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
              <div className='m-2'>
                <Field 
                  className="
                  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                  "
                  id="email" 
                  name="email" 
                  placeholder="Email" 
                  aria-describedby="usernameHelp" 
                />
              </div>
    
              <div className='m-2'>
                <Field 
                  className="
                  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                  "
                  id="password" 
                  name="password" 
                  placeholder="Password" 
                  type="password" 
                />
              </div>
              <div className='flex justify-center'>
                <button 
                  type="submit" 
                  // disabled={!input}
                  className="
                    bg-blue-500 hover:bg-blue-700 hover:scale-125 hover:accent-white text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed
                  "
                >Login</button>
              </div>
          </Form>
        </Formik>
      </div>
      
    </div>
  )
}