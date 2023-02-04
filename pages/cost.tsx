import Head from 'next/head';
import Link from 'next/link';
// import RegisterForm from '../components/register';
import CostComponent from '../components/dashboard/costComponent'
import NavBar from '../components/navbar';

export default function Register() {
  return (
    <div className=''>

      <Head>
      <title>Cost Analysis</title>
      </Head>
        <NavBar />

        <CostComponent />


    </div>
  );
}