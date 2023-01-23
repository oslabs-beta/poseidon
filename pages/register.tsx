import Head from 'next/head';
import Link from 'next/link';
import RegisterForm from '../components/register';

export default function Register() {
  return (
    <div className='grid h-screen place-items-center '>
      <Head>
        <title>Sign Up Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-slate-600 container mx-auto w-80 grid-cols-1 gap-0 content-center rounded '>
        <div>
          <RegisterForm/>
        </div>
        
        <div className='flex items-center justify-center'>
          <Link 
            href="/"
          >Back to home</Link> 
        </div>
      </main>
    </div>
  );
}
