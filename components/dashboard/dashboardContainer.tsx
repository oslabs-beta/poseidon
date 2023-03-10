import { dashUrls } from '../../constants';
import CostComponent from './costComponent';
import Grafana from './grafana';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import CostError from './costError';
import Spinner from './spinner';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const fetcher = async (url: string) => fetch(url).then((res) => res.json());
export default function DashboardContainer() {
  const [clusterType, setClusterType] = useState('deployed');
  const kubeip = publicRuntimeConfig.KUBECOST_IP;
  const localKubeip = publicRuntimeConfig.KUBECOST_IP;
  const localClusterIp = publicRuntimeConfig.LOCAL_CLUSTER_IP;
  const deployedClusterIp = publicRuntimeConfig.DEPLOYED_CLUSTER_IP;

  const { data, error, isLoading } = useSWR(
    `http://${kubeip}:9090/model/allocation?window=15d&aggregate=cluster`,
    fetcher
  );
  let deployedVisualizers;
  // array for deployed clusters
  if (dashUrls[0][0]) {
    deployedVisualizers = dashUrls[0][0]
      ? dashUrls[0].map((url, i) => <Grafana key={i} url={url} />)
      : [
          <div key="deployedkey" className="mx-auto h-48 text-sky-500 text-xl">
            You need to connect deployed clusters to see this data!
          </div>,
        ];
  }

  // array for local clusters
  const localVisualizers = dashUrls[1][0]
    ? dashUrls[1].map((url, i) => <Grafana key={`${i}+${i}`} url={url} />)
    : [
        <div
          key="localkey"
          className="container mx-auto flex flex-col justify-center items-center h-52 text-sky-500 text-3xl"
        >
          You need to connect local clusters to see this data!
        </div>,
      ];

  const toggleSelection = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setClusterType(e.currentTarget.id);
  };

  useEffect(() => {
    let clusterIndex = clusterType === 'deployed' ? 0 : 1;
  }, [clusterType]);

  return (
    <div className="container bg-slate-900 flex flex-wrap flex-grow text-gray-600 body-font min-w-full shadow-inner body min-h-2/3">
      <section className="container bg-slate-900 flex flex-wrap flex-grow text-gray-600 body-font min-w-full shadow-inner body min-h-2/3">
        <div className="cluster-selection mx-auto mt-10">
          <label
            htmlFor="Toggle3"
            className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800"
          >
            <input id="Toggle3" type="checkbox" className="hidden peer" />
            <span
              id="deployed"
              className={
                clusterType === 'deployed'
                  ? 'bg-gray-300 px-4 py-2 rounded-l dark:bg-sky-500'
                  : 'px-4 py-2 rounded-l dark:bg-gray-300 hover:underline hover:text-sky-500'
              }
              onClick={toggleSelection}
            >
              Deployed Cluster
            </span>
            <span
              id="local"
              className={
                clusterType === 'local'
                  ? 'bg-gray-300 px-4 border-x-[0.2px] border-slate-500 py-2 dark:bg-sky-500'
                  : 'px-4 py-2 dark:bg-gray-300 border-x-[0.2px] border-slate-500 hover:underline hover:text-sky-500'
              }
              onClick={toggleSelection}
            >
              Local Cluster
            </span>
            <span
              id="kubecost"
              className={
                clusterType === 'kubecost'
                  ? 'bg-gray-300 px-4 py-2 rounded-r dark:bg-sky-500'
                  : 'px-4 py-2 rounded-r dark:bg-gray-300 hover:underline hover:text-sky-500'
              }
              onClick={toggleSelection}
            >
              Cost Analysis
            </span>
          </label>
        </div>
        <div className="container flex flex-wrap justify-between mx-auto w-30 px-12 py-5">
          {/* insert both dataURL[0] and dataURL[1] with either grafana tags or the div*/}
          <div
            className={
              clusterType === 'deployed'
                ? 'container flex flex-wrap justify-between mx-auto w-30 px-12 py-5'
                : 'hidden'
            }
          >
            {/*@ts-ignore*/}
            {deployedClusterIp ? (
              deployedVisualizers
            ) : (
              <>
                <div className="container mx-auto flex flex-col justify-center items-center h-52 text-sky-500 text-3xl">
                  You need to add deployed cluster IP address to .env.local file
                  to see this data!
                </div>
              </>
            )}
          </div>
          <div
            className={
              clusterType === 'local'
                ? 'container flex flex-wrap justify-between mx-auto w-30 px-12 py-5'
                : 'hidden'
            }
          >
            {localClusterIp ? (
              <>{localVisualizers}</>
            ) : (
              <>
                <div className="container mx-auto flex flex-col justify-center items-center h-52 text-sky-500 text-3xl">
                  You need to add local cluster IP address to .env.local file to
                  see this data!
                </div>
              </>
            )}
          </div>
          <div
            className={
              clusterType === 'kubecost'
                ? 'container flex flex-wrap justify-between mx-auto w-30 px-12 py-5'
                : 'hidden'
            }
          >
            <CostComponent deployedCost={data} />
          </div>
        </div>
      </section>
    </div>
  );
}
