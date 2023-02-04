import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/LOGO-FINAL.svg';
import LoginButton from './login-btn';

export default function NavBar() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-gray-900 text-gray-200 body-font shadow-2xlg shadow-slate-900 mx-auto border-b border-gray-200 dark:border-gray-600 font-bold">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer hover:scale-105 "
            href="/login"
          >
            {/* logo vector  */}
            <Image
              className="hover:animate-[spin_6s_linear_infinite]"
              src={Logo}
              alt="Logo"
              width={60}
              height={60}
            />
            <span className="ml-3 text-white text-4xl font-extrabold px-3">
              POSEIDON
            </span>

            {/* <Link href="/" className="ml-3 text-xl">POSEIDON</Link> */}
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            {/* Home Link */}
            {/* <Link href="/" className="mr-5 hover:text-sky-400 hover:scale-110">
              Home
            </Link> */}

            {/* Dashboard Link */}
            <a
              href="/"
              className=" ml-5 mr-5 mt-1 text-xl hover:text-sky-500 font-medium group text-slate-500 transition duration-300"
            >
              Dashboard
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </a>

            {/* Cost analysis Link */}
            <a
              href="/cost"
              className="ml-5 mr-5 mt-1 text-xl hover:text-sky-500 font-medium group text-slate-500 transition duration-300"
            >
              Cost Analysis
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </a>
          </nav>
          {/* extra: based on cookies determine Login or Register */}
          {/* LOGIN BUTTON */}
          <LoginButton />
          {/* <Link
            href="/login"
            className='group relative mr-10 h-12 w-40 overflow-hidden rounded-lg bg-sky-500 text-lg shadow flex items-center justify-center '
          >
             <div className=" absolute inset-0 w-0 bg-gradient-to-r from-sky-500 to-green-400 transition-all duration-[250ms] ease-out group-hover:w-full hover:"></div>
              <span className="relative text-white group-hover:text-white ">Log out</span>
            {/* <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 14 24"
            >
              
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg> */}
          {/* </Link> */}
        </div>
      </header>
    </>
  );
}
