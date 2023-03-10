'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

//new client side login button that can be used anywhere to login for auth and toggles between sign in / sign out

export default function LoginButton() {
  const { data: session }: any = useSession();

  // if the session exists render the personalized greeting and logout button
  if (session) {
    return (
      <>
        <h2 className="my-auto">Welcome, {session.user?.firstName}</h2>

        <button
          className="ml-5 mr-5 mt-1 px-6 bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12  rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 hover:scale-110 hover:accent-white"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }

  // if the session does NOT exist, render the signin button
  return (
    <>
      <button
        className="mt-4 p-5 bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 hover:scale-110 hover:accent-white"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
