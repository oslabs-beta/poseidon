import Head from 'next/head';
import Link from 'next/link';
import RegisterForm from '../components/register';

export default function Register() {
  return (
    <div className='grid h-screen place-items-center bg-slate-900 body'>

      <Head>
        <title>Sign Up Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl xl:ml-0 dark:ring-1 dark:ring-inset dark:ring-white/10 p-5  shadow-neutral-900 shadow-2xl space-y-2'>

        <div>
          <RegisterForm/>
        </div>
        
        <div className='text-gray-200 flex items-center justify-center'>
          <span><p className='text-slate-500 mr-3'> Have an account? </p></span>
            <a href="/login" className=" ml-5 mt-1 text-sm hover:text-sky-500 font-medium group text-slate-500 transition duration-300">
              <p className='text-slate-200'>Login</p>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </a>
          {/* <Link 
            href="/"
          >Back to home</Link>  */}
        </div>
      </main>
    </div>
  );
}
