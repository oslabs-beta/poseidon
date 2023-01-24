import CostComponent from './costComponent';
import Grafana from './grafana';
import { dashUrls } from '../../constants';

export default function DashboardContainer() {
  const visualizers = dashUrls.map((url, i) => <Grafana key={i} url={url} />);

  // How to retrieve the unique identifier for dashboard -> https://grafana.com/docs/grafana/latest/developers/http_api/dashboard/
  // GET /api/dashboards/uid/:uid
  // Will return the dashboard given the dashboard unique identifier (uid).
  // Information about the unique identifier of a folder containing the requested dashboard might be found in the metadata.

  // Using d3 with grafana -> https://grafana.com/tutorials/build-a-panel-plugin-with-d3/

  return (
    <div>
      <section className="bg-gradient-to-b from-gray-400 to-slate-400 flex flex-wrap text-gray-600 body-font w-full shadow-inner">
        <div className="container flex flex-wrap px-5 mx-auto">
          <div className="container flex flex-wrap m-4 w-fit">
            {visualizers}
          </div>
        </div>
      </section>
    </div>
  );
}
