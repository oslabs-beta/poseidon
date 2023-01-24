import CostComponent from './costComponent';
import Grafana from './grafana';

export default function DashboardContainer() {

  // dummy component array
  const visualizers = [];

  for(let i = 0; i < 6; i += 1) {
    visualizers.push( <Grafana key={i}/> );
  }

  // I BROKE THE CODE I AM SORRY - JOSH
  return (
    <div>
      <section className="flex flex-wrap text-gray-600 body-font w-full border-solid border-2 border-sky-500 ">
        <div className="container flex flex-wrap px-5 py-24 mx-auto border-solid border-2 border-orange-400">
          <div className="flex flex-wrap m-4 w-3/4">
            {visualizers}
          </div>
        </div>
      </section>
    </div>
  );
}