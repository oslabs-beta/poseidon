import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import DashboardContainer from '../components/dashboard/dashboardContainer';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

// for reference:
// // // type Props = {
// // 	children: ReactElement,
// // 	home: ReactElement
// //   }

// // export default function Layout({ props: Props }: ReactElement) {

export default function Home() {
  return (
    <div>
      <Head>
        <title>Poseidon</title>
      </Head>
      <NavBar />
      <DashboardContainer />
      <Footer />
    </div>
  );
}
