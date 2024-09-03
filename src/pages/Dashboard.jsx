import {useGetCatsTotal} from "../hooks/cats/useGetCatsTotal";
import {useGetEmployeesTotal} from "../hooks/employees/useGetEmployeesTotal";
import CatsChart from "../components/CatsChart";
import SectionTitle from "../components/SectionTitle";
import Stats from "../components/Stats";
import Loading from "../components/Loading";

function Dashboard() {
  const {isPending: isCatsPeding, cats} = useGetCatsTotal();
  const {isPending: isEmployeesPeding, employees} = useGetEmployeesTotal();

  if (isCatsPeding || isEmployeesPeding) return <Loading />;

  const readyToAdopt = cats.filter(
    (cat) => cat.status === "Pronto Para Adoção"
  ).length;
  const sickCats = cats.filter((cat) => cat.status === "Enfermo").length;
  const adoptedCats = cats.filter((cat) => cat.status === "Adotado");
  const totalAdopted = adoptedCats.length;

  return (
    <div>
      <SectionTitle title="Dashboard" />
      <Stats
        catStats={{totalAdopted, readyToAdopt, sickCats}}
        employeeStats={employees.length}
      />
      <CatsChart cats={adoptedCats} />
    </div>
  );
}

export default Dashboard;
