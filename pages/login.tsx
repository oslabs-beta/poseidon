import Link from 'next/link';;
import type { NextPage } from 'next';
import Head from 'next/head';
import LoginForm from '../components/login';

const Home: NextPage = () => {
  return (
    <div className='grid h-screen place-items-center bg-slate-900'>

      <Head>
        <title className='text-slate-200'>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className="bg-no-repeat bg-left-top" style={"background-image: url('../public/backgroundImg.png');"}></div> */}
      
        <main className='relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl xl:ml-0 dark:ring-1 dark:ring-inset dark:ring-white/10 p-5  shadow-neutral-900 shadow-2xl space-y-2'>
          
          <div>
            <LoginForm/>
          </div>
          
          <div className='flex items-center justify-center'>
            <Link className='text-slate-200'
              href="/register"
            >Sign Up</Link>
          </div>
          
          <div className='flex items-center justify-center'>
            <Link className='text-slate-200'
              href="/"
            >Back to home</Link> 
          </div>

        </main>

      </div>
  )
}

export default Home

/*
{[
  ['div', 'grid h-screen place-items-center bg-slate-900'],
  ['Team', '/team'],
  ['Projects', '/projects'],
  ['Reports', '/reports'],
].map(([ele, style]) => (
  <ele className=`${style}`></ele>

))}
*/