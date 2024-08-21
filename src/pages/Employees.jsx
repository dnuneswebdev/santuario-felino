import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {dropdownItems, columns} from "../data/employees";
import {useGetEmployees} from "../hooks/employees/useGetEmployees";
import {useDispatch} from "react-redux";
import {loadEmployee} from "../features/employee/employeeSlice";
import {useDeleteEmployee} from "../hooks/employees/useDeleteEmployee";
import SectionTitle from "../components/SectionTitle";
import Table from "../components/Table";
import Modal from "../components/Modal";
import ViewEmployee from "../components/ViewEmployee";
import AddBtn from "../components/AddBtn";
import Loading from "../components/Loading";
import DeleteModal from "../components/DeleteModal";

function Employees() {
  const [employee, setEmployee] = useState({});
  const {isPending, employees} = useGetEmployees();
  const {deleteEmployee} = useDeleteEmployee();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const viewModal = document.getElementById("viewModal");
  const deleteModal = document.getElementById("deleteModal");

  if (isPending) return <Loading />;

  function handleEmployeesOperations(employeeData, mode) {
    const operationMode = mode !== undefined ? mode : "add";

    switch (operationMode) {
      case "view":
        setEmployee(employeeData);
        viewModal.showModal();
        break;
      case "edit":
        dispatch(loadEmployee(employeeData));
        return navigate(`/employees/${employeeData.id}`);
      case "delete":
        setEmployee(employeeData);
        deleteModal.showModal();
        break;
      default:
        return navigate(`/employees/add`);
    }
  }

  function onDeleteEmployee() {
    const {id} = employee;

    deleteEmployee(id, {
      onSuccess: () => {
        deleteModal.close();
      },
    });
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
      <Modal title={employee.name} id="viewModal">
        <ViewEmployee employee={employee} />
      </Modal>
      <Modal title="Atenção" id="deleteModal">
        <DeleteModal handleDelete={onDeleteEmployee} />
      </Modal>
    </>
  );
}

export default Employees;
