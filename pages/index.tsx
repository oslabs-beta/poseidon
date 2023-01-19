import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Home ({ props }) {
  return (
    <Layout home>
      <Head>
        <title>Poseidon</title>
      </Head>
      <h1>this is index</h1>
    </Layout>
  )
}