import Head from 'next/head';
import Link from 'next/link';
// import RegisterForm from '../components/register';
import CostComponent from '../components/dashboard/costComponent';
import NavBar from '../components/navbar';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export default function Cost({ data }: any) {
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
  //in terminal, type kubectl get service -n kubecost and put external ip in kubecostIP value here:
  // const kubecostIP = '127.0.0.1';
  const URL = `http://127.0.0.1:9090/model/allocation?window=7d&aggregate=cluster`;
  const response = await fetch(URL);
  //if no response, the cost component will not break!!
  if (response) {
    const parsed = await response.json();

    console.log('parsed data inside getServerSideProps: ', parsed.data);
    if (parsed) {
      const parsedArr = parsed.data;
      async function getProps(parsedArr: []) {
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
            if (key === 'loadBalancerCost')
              totalloadBalancerCost += metricObject[key];
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
          'CPU Cost': totalCPU,
          'RAM Cost': totalRAM,
          'GPU Cost': totalGPU,
          'Load Balancer Cost': totalloadBalancerCost,
          'Network Cost': totalNetworkCost,
          'PV Cost': totalPVCost,
          'Shared Cost': totalSharedCost,
          'Total Cost': totalCost,
          totalDays,
        };
        console.log('This is data after all our friggin work: ', data);
        return {
          props: {
            data,
            session,
          },
        };
      }
      return getProps(parsedArr);
    }

    // NodeHourlyCost = NORMALIZED_GPU_PRICE * # of GPUs + NORMALIZED_CPU_PRICE * # of CPUs + NORMALIZED_RAM_PRICE * # of RAM GB
  } else {
    // was a console log here about stuff not working
    const data = '';
    return {
      props: {
        data,
        session,
      },
    };
  }
}
