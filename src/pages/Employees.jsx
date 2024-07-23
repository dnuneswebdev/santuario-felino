import SectionTitle from "../components/SectionTitle";
import Table from "../components/Table";
import {employees, dropdownItems, columns} from "../data/employees";

function Employees() {
  return (
    <>
      <SectionTitle title="Funcionários" />
      <Table
        columns={columns}
        data={employees}
        hasActions={true}
        dropdownItems={dropdownItems}
      />
    </>
  );
}

export default Employees;
