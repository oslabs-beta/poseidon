import Link from 'next/link';;
import type { NextPage } from 'next';
import Head from 'next/head';
import LoginForm from '../components/login';
import Image from 'next/image';
import Logo from '../public/LOGO-FINAL.svg'
import LoginButton from '../components/login-btn';


// not using this anymore

const Home: NextPage = () => {
  return (
    <div className='grid h-screen place-items-center bg-slate-900 body'
    
    >
      <Head>
        <title className="text-slate-200 text-2xl ">Sign In</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LogoPNG.png" />
      </Head>

      {/* <div className="bg-no-repeat bg-left-top" style={"background-image: url('../public/backgroundImg.png');"}></div> */}
      
        <main className='py-10 relative z-10 col-span-3 bg-slate-800 rounded-xl xl:ml-0 dark:ring-1 dark:ring-inset dark:ring-white/10 p-5  shadow-neutral-900 shadow-2xl space-y-2'>

          <Image 
              className='mx-auto hover:animate-[spin_6s_linear_infinite]'
              src={Logo}
              alt='Logo'
              width={200}
              height={200}
            />     
          
          <div className='flex flex-row '>
            {/* took away our login form for now */}
            <LoginForm/>
            {/* <LoginButton/> */}

          </div>
          
          <div className='flex items-center justify-center'>
          <span><p className='text-slate-500 mr-3'> Don't have an account? </p></span>
            <a href="/register" className=" ml-5 mt-1 text-sm hover:text-sky-500 font-medium group text-slate-500 transition duration-300">
              <p className='text-slate-200'>Sign Up</p>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </a>
            {/* <Link className='text-slate-200'
              href="/register"
            >Sign Up</Link> */}
          </div>
          
          {/* <div className='flex items-center justify-center'> */}
            {/* <Link className='text-slate-200'
              href="/"
            >Back to home</Link>  */}
          {/* </div> */}

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