import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {dropdownItems, columns} from "../data/employees";
import {useGetEmployees} from "../hooks/employees/useGetEmployees";
import {useDispatch} from "react-redux";
import {loadEmployee} from "../features/employee/employeeSlice";
import SectionTitle from "../components/SectionTitle";
import Table from "../components/Table";
import Modal from "../components/Modal";
import ViewEmployee from "../components/ViewEmployee";
import AddBtn from "../components/AddBtn";
import Loading from "../components/Loading";

function Employees() {
  const [employee, setEmployee] = useState({});
  const {isPending, employees} = useGetEmployees();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (isPending) return <Loading />;

  function handleEmployeesOperations(employeeData, mode) {
    const operationMode = mode !== undefined ? mode : "add";
    const modal = document.getElementById("modal");

    switch (operationMode) {
      case "view":
        setEmployee(employeeData);
        modal.showModal();
        break;
      case "edit":
        dispatch(loadEmployee(employeeData));
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
