import Link from 'next/link';

export default function NavBar() {
  return (
    <>
      <header className="bg-gray-900 text-gray-200 body-font shadow-2xlg shadow-slate-900 mx-auto border-b border-gray-200 dark:border-gray-600 font-bold">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
            {/* logo vector  */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white text-3xl font-extrabold px-3">POSEIDON</span>
            {/* <Link href="/" className="ml-3 text-xl">POSEIDON</Link> */}
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            {/* Home Link */}
            {/* <Link href="/" className="mr-5 hover:text-sky-400 hover:scale-110">
              Home
            </Link> */}

            {/* Dashboard Link */}
            <a href="/" className="mr-5 hover:text-sky-400 text-xl hover:scale-110">
              Dashboard
            </a>

            {/* Cost analysis Link */}
            <a href="/" className="mr-5 hover:text-sky-400 text-xl hover:scale-110">
              Cost Analysis
            </a>
          </nav>
          {/* extra: based on cookies determine Login or Register */}
          {/* LOGIN BUTTON */}
          <Link
            href="/login"
            className="inline-flex items-center shadow-xl px-3 py-2 border-0 bg-gradient-to-r from-green-400 to-blue-500 hover: from-pink-500 hover:to-yellow-500 hover:scale-125 rounded text-base mt-4 md:mt-0 shadow-lg shadow-blue-500/50"
          >
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </header>
    </>
  );
}
