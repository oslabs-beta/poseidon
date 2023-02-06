import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import RegisterForm from '../components/register';
import Logo from '../public/LOGO-FINAL.svg'

export default function Register() {
  return (
    <div className='grid h-screen place-items-center bg-slate-900 body'>

      <Head>
        <title className="text-slate-200 text-2xl ">Sign Up</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LogoPNG.png" />
      </Head>

      <main className='relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl xl:ml-0 dark:ring-1 dark:ring-inset dark:ring-white/10 p-5  shadow-neutral-900 shadow-2xl space-y-2'>

        <Image 
          className='mx-auto hover:animate-[spin_6s_linear_infinite]'
          src={Logo}
          alt='Logo'
          width={200}
          height={200}
        />    

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

        <div>
          <RegisterForm/>
        </div>
        
        {/* HAVE AN ACCOUNT BLOCK */}
        <div className='text-gray-200 flex items-center justify-center'>
          <span><p className='text-slate-500 mr-3'> Have an account? </p></span>
            <a href="/auth/signin" className="ml-5 mt-1 text-sm hover:text-sky-500 font-medium group text-slate-500 transition duration-300">
              <p className='text-slate-200'>Login</p>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </a>
        </div>

      </main>
    </div>
  );
}
