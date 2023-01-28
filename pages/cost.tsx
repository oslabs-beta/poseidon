import Head from 'next/head';
import Link from 'next/link';
// import RegisterForm from '../components/register';
import CostComponent from '../components/dashboard/costComponent'
import NavBar from '../components/navbar';

export default function Register() {
  return (
    <div className=''>

      <Head>
        <NavBar />
        <title>Cost Analysis</title>
        <CostComponent />
      </Head>

    </div>
  );
}