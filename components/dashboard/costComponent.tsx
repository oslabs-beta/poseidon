import Footer from '../footer';
export default function CostComponent() {
  return (
    <div className="grid h-screen place-items-center bg-slate-900  w-full shadow-inner body ">
      <div className=" justify-center items-center flex flex-row mt-12 ">
        <a
          href="#"
          className="block max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 "
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {' '}
            Deployment Cost Calculator
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 mb-8"></p>
          <div>
            <div className="mb-4 relative">
              <input
                type="text"
                id="floating_filled"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_filled"
                className=" absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Number of Clusters
              </label>
            </div>
            <div className="mb-4 relative">
              <input
                type="text"
                id="floating_filled"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_filled"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Estemated Execution Time
              </label>
            </div>
            <div className="mb-4 relative">
              <input
                type="text"
                id="floating_filled"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_filled"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Memory in mbs
              </label>
            </div>
            <button
              // disabled={!input}
              className="mx-auto bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 hover:scale-110 hover:accent-white"
            >
              Calculate
            </button>
          </div>
        </a>

        <div className="ml-6 relative overflow-x-auto border border-gray-600 rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Vendor <br />
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Average cost <br />
                  per cluster
                </th>
                <th scope="col" className="px-6 py-3">
                  Cost <br />
                  per pod
                </th>
                <th scope="col" className="px-6 py-3">
                  Kubelet <br />
                  cost
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  AWS
                </th>
                <td className="px-6 py-4">$0</td>
                <td className="px-6 py-4">$0</td>
                <td className="px-6 py-4">$0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  GCP
                </th>
                <td className="px-6 py-4">$0</td>
                <td className="px-6 py-4">$0</td>
                <td className="px-6 py-4">$0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  AZURE
                </th>
                <td className="px-6 py-4">$0</td>
                <td className="px-6 py-4">$0</td>
                <td className="px-6 py-4">$0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Rancher
                </th>
                <td className="px-6 py-4">$0</td>
                <td className="px-6 py-4">$0</td>
                <td className="px-6 py-4">$0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Red Hat OpenShift
                </th>
                <td className="px-6 py-4">$0</td>
                <td className="px-6 py-4">$0</td>
                <td className="px-6 py-4">$0</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  VMware Tanzu
                </th>
                <td className="px-6 py-4">$0</td>
                <td className="px-6 py-4">$0</td>
                <td className="px-6 py-4">$0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
