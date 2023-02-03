import Link from 'next/link';

export default function Footer() {
  return (
    <div className="full-width">
      <section className="bg-slate-900 ">
        <div className="max-w-lg bg-slate-900 px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
          <h1 className="text-3xl font-bold leading-10 tracking-tight text-white text-center sm:leading-none md:text-6xl text-1xl lg:text-5xl">
            <span className="inline md:block">Learn More</span>
            <span className=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-green-500 md:inline-block">
              {' '}
              About
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-blue-300">
                {' '}
                Poseidon
              </span>{' '}
            </span>
          </h1>
          <div className="flex items-center justify-center mx-auto rounded-lg font-black text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg">
            <Link
              href="/login"
              className=" ml-8 group relative mr-10 h-12 w-40 overflow-hidden rounded-lg bg-sky-500 text-lg shadow flex items-center justify-center "
            >
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-sky-500 to-green-400  transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-white group-hover:text-white ">
                Main Page
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/*         
      <hr className="text-white mx-5" /> */}

      <footer className="bg-slate-900 pb-5">
        <div className="container mx-auto px-6">
          <div className=" flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm text-slate-700 font-bold mb-2 font-light">
                © 2023 by Joshuah Edwards, Will Moody, Xiao Tong Chow, Alina
                Grafkina
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
