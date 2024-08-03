import {useState} from "react";
import SectionTitle from "../components/SectionTitle";
import Table from "../components/Table";
import {employees, dropdownItems, columns} from "../data/employees";
import Modal from "../components/Modal";
import ViewEmployee from "../components/ViewEmployee";

function Employees() {
  const [employee, setEmployee] = useState({});

  function handleEmployeesOperations(employeeData, mode) {
    const operationMode = mode !== undefined ? mode : "add";
    const modal = document.getElementById("modal");

    switch (operationMode) {
      case "view":
        setEmployee(employeeData);
        modal.showModal();
        break;
    }
  }

  return (
    <>
      <SectionTitle title="Funcionários" />
      <Table
        columns={columns}
        data={employees}
        hasActions={true}
        dropdownItems={dropdownItems}
        handleItemClick={handleEmployeesOperations}
      />
      <Modal title={employee.name}>
        <ViewEmployee employee={employee} />
      </Modal>
    </>
  );
}

export default Employees;
