import CostComponent from './costComponent';
import Grafana from './grafana';
import { dashUrls } from '../../constants';
import { useSession } from 'next-auth/react';

export default function DashboardContainer() {
	const { data: session } = useSession();
	const visualizers = dashUrls.map((url, i) => <Grafana key={i} url={url} />);

  if (session) {
    return (
			<div>
				<section className="bg-slate-900 flex flex-wrap text-gray-600 body-font w-full shadow-inner body">
					<div className="container flex flex-wrap justify-between mx-auto w-30 px-12 py-5">
						{visualizers}
					</div>
				</section>
			</div>
    )
  }
  return (
    <div className='bg-red-400 content-center animate-pulse'>
			<div className='content-center'
			>
      	<h1 className='text-gray-900 text-center'
				>You are not authorized to see this content</h1>
			</div>

    </div>
  )

	// How to retrieve the unique identifier for dashboard -> https://grafana.com/docs/grafana/latest/developers/http_api/dashboard/
	// GET /api/dashboards/uid/:uid
	// Will return the dashboard given the dashboard unique identifier (uid).
	// Information about the unique identifier of a folder containing the requested dashboard might be found in the metadata.

	// Using d3 with grafana -> https://grafana.com/tutorials/build-a-panel-plugin-with-d3/
}
