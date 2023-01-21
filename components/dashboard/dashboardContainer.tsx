import CostComponent from './costComponent';
import Grafana from './grafana';

export default function DashboardContainer() {
  return (
    <div>
      <h1>DashboardContainer</h1>
      <CostComponent />
      <Grafana />
    </div>
  );
}
