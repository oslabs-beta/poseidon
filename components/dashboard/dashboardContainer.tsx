import CostComponent from './costComponent';
import Grafana from './grafana';

export default function DashboardContainer() {

  // dummy component array
  const visualizers = [];

  for(let i = 0; i < 6; i += 1) {
    visualizers.push( <Grafana key={i}/> );
  }

  return (
    <div>
      <section className="bg-gradient-to-b from-gray-400 to-slate-400 flex flex-wrap text-gray-600 body-font w-full shadow-inner">
        <div className="container flex flex-wrap px-5 py-24 mx-auto">
          <div className="container flex flex-wrap m-4 w-fit">
            {visualizers}
          </div>
        </div>
      </section>
    </div>
  );
}