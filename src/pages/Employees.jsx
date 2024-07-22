import SectionTitle from "../components/SectionTitle";
import Table from "../components/Table";
import {employees} from "../data/employees";

const columns = {
  name: "Nome",
  nationalID: "CPF",
  entryDate: "Data De Entrada",
  role: "Cargo",
};

function Employees() {
  return (
    <>
      <SectionTitle title="Funcionários" />
      <Table columns={columns} data={employees} hasActions={true} />
    </>
  );
}

export default Employees;
