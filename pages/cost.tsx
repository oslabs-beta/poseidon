import Head from 'next/head';
import Link from 'next/link';
// import RegisterForm from '../components/register';
import CostComponent from '../components/dashboard/costComponent';
import NavBar from '../components/navbar';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import CostError from '../components/dashboard/costError';
import Spinner from '../components/dashboard/spinner';
import useSWR from 'swr';
import { useState, useEffect } from 'react';
const fetcher = async (url: string) => fetch(url).then((res) => res.json());
export default function Cost() {
  const { data, error, isLoading } = useSWR(
    `http://127.0.0.1:9090/model/allocation?window=15d&aggregate=cluster`,
    fetcher
  );
  if (error) {
    return (
      <>
        <CostError />
      </>
    );
  }
  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  return (
    <div>
      <Head>
        <title>Cost Analysis</title>
      </Head>

      <NavBar />
      <CostComponent data={data} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  // get cookie first!
  const session = await getServerSession(context.req, context.res, authOptions);

  // if no session, just go ahead and redirect
  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  const data = '';
  return {
    props: {
      data,
      session,
    },
  };
}
