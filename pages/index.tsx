import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import DashboardContainer from '../components/dashboard/dashboardContainer';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import { useSession, signIn, signOut } from 'next-auth/react';
import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';

// for reference:
// // // type Props = {
// // 	children: ReactElement,
// // 	home: ReactElement
// //   }

// // export default function Layout({ props: Props }: ReactElement) {

export default function Home() {
  const { data: session } = useSession();
  const dashboard = session ? <DashboardContainer /> : null;
  // if (!session) {
  //   setTimeout(() => {
  //     signIn();
  //   }, '1000');
  // }
  return (
    <>
      <div>
        <Head>
          <title>Poseidon</title>
        </Head>
        <NavBar />
        {dashboard}
        <Footer />
      </div>
    </>
  );
}

// export async function getServerSideProps(context: any) {
//   const session = await getServerSession(context.req, context.res, authOptions);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// }

// export function getServerSideProps() {
//   return {
//     props: { message: 'Welcome to the About Page' },
//   };
// }
