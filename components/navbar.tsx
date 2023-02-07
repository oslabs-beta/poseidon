import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/LOGO-FINAL.svg';
import LoginButton from './login-btn';

export default function NavBar() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-gray-900 text-gray-200 body-font shadow-2xlg shadow-slate-900 mx-auto border-b border-gray-200 dark:border-gray-600 font-bold h-[10%]">
        <div className="flex justify-between">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
            <a
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer hover:scale-105 "
              href="/"
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
            </a>
          </div>
          <div className="flex justify-center self-center min-w-fit border-1 border-white">
            <LoginButton />
          </div>
        </div>
      </header>
    </>
  );
}
