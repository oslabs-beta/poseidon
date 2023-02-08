import { useState, useEffect } from 'react';
import useSWR from 'swr';
import getConfig from 'next/config';
import Spinner from './spinner';
const { publicRuntimeConfig } = getConfig();
const fetcher = async (url: string) => fetch(url).then((res) => res.json());

export default function CostComponent({ deployedCost }: any) {
  let refinedData: any = '';
  let tableVals: any = '';
  const dataArr = deployedCost.data;
  const kubeip = publicRuntimeConfig.LOCAL_KUBECOST_IP;
  const { data, error, isLoading } = useSWR(
    `http://${kubeip}:9090/model/allocation?window=15d&aggregate=cluster`,
    fetcher
  );
  const [kubeCostVals, setKubeCostVals] = useState({});
  const [clusterType, setClusterType] = useState('deployed');
  const [localClusters, setLocalClusters] = useState([]);
  useEffect(() => {
    const sortFetchedData = async (parsedArr: any) => {
      const getProps = async (parsedArr: []) => {
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
          //this will ignore any objects that are empty (if cluster only has a few days worth of data)
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
        setKubeCostVals(data);
      };
      getProps(parsedArr);
    };
    if (clusterType === 'deployed') {
      sortFetchedData(dataArr);
    } else if (clusterType === 'local' && !error) {
      console.log('data sortFetchedData: ', data);
      sortFetchedData(data.data);
    }
  }, [setKubeCostVals, dataArr, clusterType, data, getAverages, makeTableVals]);

  function makeTableVals(data: any): void {
    if (data) {
      const newTableVals = [];
      for (const key in data) {
        if (data[key] !== 0 && key !== 'totalDays') {
          newTableVals.push(
            <tr
              key={key}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {key === 'Total Cost' ? (
                  <p className="text-sky-500 font-bold ">{key}:</p>
                ) : (
                  key
                )}
              </th>
              <td
                className={
                  key === 'Total Cost'
                    ? 'px-6 py-4 font-bold text-sky-500'
                    : 'px-6 py-4'
                }
              >
                ${data[key].toFixed(2)}
              </td>
            </tr>
          );
        }
      }
      tableVals = newTableVals;
    }
  }
  function getAverages(data: any) {
    if (data) {
      //take totalDays
      const totalDays = data.totalDays;
      //create new set of variables to store updated projected costs for each val in data
      const averageCost: any = {};

      //iterate over the rest of data
      for (const key in data) {
        //calc the average cost/day/component
        averageCost[key] = (data[key] / totalDays) * 30;
      }
      refinedData = averageCost;
      return;
    }
  }

  const toggleSelection = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setClusterType(e.currentTarget.id);
  };
  if (clusterType === 'deployed' && deployedCost.data) {
    getAverages(kubeCostVals);
    makeTableVals(refinedData);
  } else if (clusterType === 'local' && !error) {
    getAverages(kubeCostVals);
    makeTableVals(refinedData);
  }
  return (
    <div className="mx-auto flex flex-col items-center justify-center items-center  ">
      <div className="relative overflow-x-auto border border-gray-600 rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Cost <br />
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Total Cost <br />
                per month
              </th>
            </tr>
          </thead>
          <tbody>
            {tableVals ? (
              tableVals
            ) : (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <h2>
                    You Need To Connect To Kubecost
                    <br /> Before You Can See Expected Cluster Costs
                  </h2>
                </th>
                <td className="px-6 py-4">
                  <h2>
                    You Need To Connect To Kubecost
                    <br /> Before You Can See Expected Cluster Costs
                  </h2>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
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
                ? 'bg-gray-300 px-4 py-2 rounded-r dark:bg-sky-500'
                : 'px-4 py-2 rounded-r dark:bg-gray-300 hover:underline hover:text-sky-500'
            }
            onClick={toggleSelection}
          >
            Local Cluster
          </span>
        </label>
      </div>
    </div>
  );
}
