import Link from 'next/link';;
import type { NextPage } from 'next';
import Head from 'next/head';
import LoginForm from '../components/login';


const Home: NextPage = () => {
  return (
    <div className='grid h-screen place-items-center '>
      <Head>
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-slate-600 container mx-auto w-80 grid-cols-1 gap-0 content-center rounded '>
        <div>
          <LoginForm/>
        </div>
        
        <div className='flex items-center justify-center'>
          <Link 
            href="/register"
          >Sign Up</Link>
        </div>
        <div className='flex items-center justify-center'>
          <Link 
            href="/"
          >Back to home</Link> 
        </div>
      </main>
    </div>
  )
}

export default Home
