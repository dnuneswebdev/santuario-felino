import CatsChart from "../components/CatsChart";
import SectionTitle from "../components/SectionTitle";
import Stats from "../components/Stats";

function Dashboard() {
  return (
    <div>
      <SectionTitle title="Dashboard" />
      <Stats />
      <CatsChart />
    </div>
  );
}

export default Dashboard;
