import Head from 'next/head';
import Link from 'next/link';
// import RegisterForm from '../components/register';
import CostComponent from '../components/dashboard/costComponent';
import NavBar from '../components/navbar';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

export default function Cost({ data }: any) {
  // export default function Cost({
  //   Component,
  //   pageProps: { session, ...pageProps },
  // }: AppProps) {
  //   // console.log('This is data within Cost page', data);

  return (
    // <SessionProvider session={session}>
    <div>
      <Head>
        <title>Cost Analysis</title>
      </Head>

      <NavBar />
      <CostComponent data={data} />
    </div>
    // </SessionProvider>
  );
}

export async function getServerSideProps() {
  //in terminal, type kubectl get service -n kubecost and put external ip in kubecostIP value here:
  // const kubecostIP = '127.0.0.1';
  const URL = `http://127.0.0.1:9090/model/allocation?window=7d&aggregate=cluster`;
  // const URL = `http://localhost:9090/model/allocation?window=7d&aggregate=cluster`;
  const response = await fetch(URL);
  const parsed = await response.json();

  console.log('parsed data inside getServerSideProps: ', parsed.data);

  if (parsed) {
    const parsedArr = parsed.data;
    function getProps(parsedArr: []) {
      let totalCPU = 0;
      let totalRAM = 0;
      let totalGPU = 0;
      let totalloadBalancerCost = 0;
      let totalNetworkCost = 0;
      let totalPVCost = 0;
      let totalCost = 0;
      let totalSharedCost = 0;
      let totalDays = 0;
      // add cost efficiency

      function getMetrics(metricObject: any) {
        for (const key in metricObject) {
          if (key === 'cpuCost') totalCPU += metricObject[key];
          if (key === 'gpuCost') totalGPU += metricObject[key];
          if (key === 'ramCost') totalRAM += metricObject[key];
          if (key === 'networkCost') totalNetworkCost += metricObject[key];
          if (key === 'loadBalancerCost') totalloadBalancerCost += metricObject[key];
          if (key === 'pvCost') totalPVCost += metricObject[key];
          if (key === 'totalCost') totalCost += metricObject[key];
          if (key === 'sharedCost') totalSharedCost += metricObject[key];
        }
      }
      parsedArr.forEach((obj: any) => {
        if (obj.__idle__) {
          totalDays += 1;
          for (const key in obj) {
            getMetrics(obj[key]);
          }
        }
      });
      const data = {
        totalCPU,
        totalRAM,
        totalGPU,
        totalloadBalancerCost,
        totalNetworkCost,
        totalPVCost,
        totalCost,
        totalSharedCost,
        totalDays,
      };
      console.log('This is data after all our friggin work: ', data);

      // NodeHourlyCost = NORMALIZED_GPU_PRICE * # of GPUs + NORMALIZED_CPU_PRICE * # of CPUs + NORMALIZED_RAM_PRICE * # of RAM GB

      return { props: { data } };
    }
    return getProps(parsedArr);
  } else {
    console.log('error! no data retrieved from kubecost!!');
  }
}
