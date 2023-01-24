import Link from 'next/link';

export default function NavBar() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

            {/* logo vector  */}

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">POSEIDON</span>
            {/* <Link href="/" className="ml-3 text-xl">POSEIDON</Link> */}
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            {/* Home Link */}
            <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>

            {/* Dashboard Link */}
            <a href="/" className="mr-5 hover:text-gray-900">Dashboard</a>

            {/* Cost analysis Link */}
            <a href="/" className="mr-5 hover:text-gray-900">Cost Analysis</a>
          </nav>
          {/* extra: based on cookies determine Login or Register */}
          {/* LOGIN BUTTON */}
          <Link href="/login" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </header>
    </>
  );
};
