import Head from 'next/head';
import Link from 'next/link';
import RegisterForm from '../components/register';

export default function Register() {
  return (
    <div className='grid h-screen place-items-center bg-slate-900'>

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
          <Link 
            href="/"
          >Back to home</Link> 
        </div>
      </main>
    </div>
  );
}
