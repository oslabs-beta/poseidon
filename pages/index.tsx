import Head from 'next/head';
import DashboardContainer from '../components/dashboard/dashboardContainer';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import { useSession, signIn, signOut } from 'next-auth/react';
import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';


export default function Home() {

  return (
    <div>
      <Head>
        <title className="text-slate-200 text-2xl ">Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LogoPNG.png" />
      </Head>

      <NavBar />
      <DashboardContainer /> 
      <Footer />
    </div>
  )
}

// this is a server side retreival of the session cookie, which then returns the props to the component above- allows the page to not even render if no cookie
export async function getServerSideProps(context: any) {
  
  // this gets the session cookie from the server
  const session = await getServerSession(context.req, context.res, authOptions);

  // if there is no session cookie, redirect them to the signin page - well before page renders
  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }
  // if there is a cookie, return the session info as props
  return {
    props: { session }
  }
}
