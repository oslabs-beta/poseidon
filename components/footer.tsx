import Link from 'next/link';

export default function Footer() {
  return (
    <div >
      {/* <div className='border-4 border-indigo-200 border-t-indigo-500 '></div> */}
      {/* <hr className="h-px p-8 border-0 bg-cyan-600 blur-3xl"></hr> */}
      <section className="bg-gray-900 ">
            <div
                  className="max-w-lg bg-gray-900 px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center"
                >
                  <h1
                    className="text-3xl font-extrabold leading-10 tracking-tight text-white text-center sm:leading-none md:text-6xl text-1xl lg:text-7xl"
                  >
                    <span className="inline md:block">Learn More</span>
                    <span
                      className=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-green-500 md:inline-block"
                    > About<span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-blue-300"> Poseidon</span> </span>
                  </h1>
                  <div
                    className="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg"
                  >
                    <Link
                      href=""
                      className="inline-flex text-white items-center shadow-xl px-3 py-2 border-0 bg-gradient-to-r from-green-400 to-blue-500 hover: from-pink-500 hover:to-yellow-500 hover:scale-125 rounded text-base mt-4 md:mt-0 shadow-blue-500/50"
                    >
                      Main Page
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-1 text-white "
                        viewBox="0 0 24 24"
                      >
                        
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
        </section>
{/*         
      <hr className="text-white mx-5" /> */}
        <footer className="bg-gray-900 pb-5">
        <div className="container mx-auto px-6">
        <div className=" flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
                <p className="text-sm text-blue-700 font-bold mb-2">
                    © 2023 by Pavlove BIOKOU
                </p>
            </div>
        </div>
    </div>
      </footer>

      
    </div>
  );
}
