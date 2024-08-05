import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {employees, dropdownItems, columns} from "../data/employees";
import SectionTitle from "../components/SectionTitle";
import Table from "../components/Table";
import Modal from "../components/Modal";
import ViewEmployee from "../components/ViewEmployee";
import AddBtn from "../components/AddBtn";

function Employees() {
  const [employee, setEmployee] = useState({});
  const navigate = useNavigate();

  function handleEmployeesOperations(employeeData, mode) {
    const operationMode = mode !== undefined ? mode : "add";
    const modal = document.getElementById("modal");

    switch (operationMode) {
      case "view":
        setEmployee(employeeData);
        modal.showModal();
        break;
      case "edit":
        return navigate(`/employees/${employeeData.id}`);
      default:
        return navigate(`/employees/add`);
    }
  }

  return (
    <>
      <SectionTitle title="Funcionários" />
      <AddBtn onClickAdd={handleEmployeesOperations} />
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
