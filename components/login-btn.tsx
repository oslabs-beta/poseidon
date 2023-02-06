'use client'
import { useSession, signIn, signOut } from "next-auth/react"

//new client side login button that can be used anywhere to login for auth and toggles between sign in / sign out

export default function LoginButton() {
  const { data: session }: any = useSession()

  // if the session exists render the personalized greeting and logout button
  if (session) {
    return (
      <>
        Welcome, {session.user?.firstName} <br />
        <button 
          className="ml-5 mr-5 mt-1 px-6 bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12  rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 hover:scale-110 hover:accent-white"
          onClick={
            () => signOut()
          }
        >
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg> */}
          Sign out
        </button>
      </>
    )
  }

  // if the session does NOT exist, render the signin button
  return (
    <>
      <button 
        className="mt-4 p-5 bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 hover:scale-110 hover:accent-white"
        onClick={
          () => signIn()
        }
      >
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
        </svg> */}
        Sign in
      </button>
    </>
  )
}