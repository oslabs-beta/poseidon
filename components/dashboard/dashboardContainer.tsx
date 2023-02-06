import CostComponent from './costComponent';
import Grafana from './grafana';
import { dashUrls } from '../../constants';
import Router from 'next/router';
import { useState, useEffect, SyntheticEvent, useRef } from 'react';
import cluster from 'cluster';
import useSWR from 'swr';
import CostError from './costError';
import Spinner from './spinner';

const fetcher = async (url: string) => fetch(url).then((res) => res.json());

export default function DashboardContainer({ props }: any) {
  const [clusterType, setClusterType] = useState('deployed');
  //http://34.121.148.52:9090/overview
  const { data, error, isLoading } = useSWR(
    `http://34.121.148.52:9090/model/allocation?window=15d&aggregate=cluster`,
    fetcher
  );

  // array for deployed clusters
  const deployedVisualizers = dashUrls[0][0]
    ? dashUrls[0].map((url, i) => <Grafana key={i} url={url} />)
    : [
        <div className="mx-auto h-48 text-sky-500 text-xl">
          You need to connect deployed clusters to see this data!
        </div>,
      ];

  // array for local clusters
  const localVisualizers = dashUrls[1][0]
    ? dashUrls[1].map((url, i) => <Grafana key={-i} url={url} />)
    : [
        <div className="container mx-auto flex flex-col justify-center items-center h-52 text-sky-500 text-3xl">
          You need to connect local clusters to see this data!
        </div>,
      ];

  const toggleSelection = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setClusterType(e.currentTarget.id);
    console.log('This is the cluster type: ', clusterType);
  };

  useEffect(() => {
    let clusterIndex = clusterType === 'deployed' ? 0 : 1;
    console.log('Current clusterIndex: ', clusterIndex);
  }, [clusterType]);

  return (
    <div>
      <section className="bg-slate-900 flex flex-wrap text-gray-600 body-font w-full shadow-inner body">
        <div className="cluster-selection mx-auto mt-10">
          <label
            htmlFor="Toggle3"
            className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800"
          >
            <input id="Toggle3" type="checkbox" className="hidden peer" />
            <span
              id="deployed"
              // type="span"
              className={
                clusterType === 'deployed'
                  ? 'bg-gray-300 px-4 py-2 rounded-l dark:bg-sky-500'
                  : 'px-4 py-2 rounded-l dark:bg-gray-300 hover:underline hover:text-sky-500'
              }
              // onSubmit={toggleSelection}
              onClick={toggleSelection}
            >
              Deployed Cluster
            </span>
            <span
              id="local"
              // type="span"
              className={
                clusterType === 'local'
                  ? 'bg-gray-300 px-4 py-2 dark:bg-sky-500'
                  : 'px-4 py-2 dark:bg-gray-300 hover:underline hover:text-sky-500'
              }
              // onSubmit={toggleSelection}
              onClick={toggleSelection}
            >
              Local Cluster
            </span>
            <span
              id="kubecost"
              // type="span"
              className={
                clusterType === 'kubecost'
                  ? 'bg-gray-300 px-4 py-2 rounded-r dark:bg-sky-500'
                  : 'px-4 py-2 rounded-r dark:bg-gray-300 hover:underline hover:text-sky-500'
              }
              // onSubmit={toggleSelection}
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
            {deployedVisualizers}
          </div>
          <div
            className={
              clusterType === 'local'
                ? 'container flex flex-wrap justify-between mx-auto w-30 px-12 py-5'
                : 'hidden'
            }
          >
            {localVisualizers}
          </div>
          <div
            className={
              clusterType === 'kubecost'
                ? 'container flex flex-wrap justify-between mx-auto w-30 px-12 py-5'
                : 'hidden'
            }
          >
            {error ? (
              <CostError />
            ) : (
              <>
                {isLoading ? (
                  <Spinner />
                ) : (
                  <>
                    <CostComponent data={data} />
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
  // return (
  //   <div className="bg-red-400 content-center animate-pulse">
  //     <div className="content-center">
  //       <h1 className="text-gray-900 text-center">
  //         You are not authorized to see this content
  //       </h1>
  //     </div>
  //   </div>
  // );

  // How to retrieve the unique identifier for dashboard -> https://grafana.com/docs/grafana/latest/developers/http_api/dashboard/
  // GET /api/dashboards/uid/:uid
  // Will return the dashboard given the dashboard unique identifier (uid).
  // Information about the unique identifier of a folder containing the requested dashboard might be found in the metadata.

  // Using d3 with grafana -> https://grafana.com/tutorials/build-a-panel-plugin-with-d3/
}
