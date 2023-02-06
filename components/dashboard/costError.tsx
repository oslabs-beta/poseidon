import Head from 'next/head';
import NavBar from '../navbar';
export default function CostError() {
  return (
    <div>
      <Head>
        <title>Cost Analysis</title>
      </Head>

      <NavBar />
      <div className="grid h-screen place-items-center bg-slate-900  w-full shadow-inner body ">
        <h2 className="text-sky-500">
          You need to connect to Kubecost to see any data!
        </h2>
      </div>
    </div>
  );
}
