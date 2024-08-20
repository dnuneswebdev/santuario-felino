import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useCreateEmployee} from "../hooks/employees/useCreateEmployee";
import {useSelector} from "react-redux";
import {useEditEmployee} from "../hooks/employees/useEditEmployee";
import {defaultFormatDate} from "../utils/helpers";
import SectionTitle from "../components/SectionTitle";
import InputMask from "react-input-mask";

function Employee() {
  const employee = useSelector((state) => state.employee.employee);
  const {createEmployee, isCreatingEmployee} = useCreateEmployee();
  const {editEmployee, isEditingEmployee} = useEditEmployee();
  const params = useParams();
  const isEditing = params.id !== "add";
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigate = useNavigate();

  function onSubmit(formValues) {
    if (isEditing) {
      editEmployee(
        {employee: formValues, id: employee.id},
        {
          onSuccess: () => {
            navigateToEmployees();
          },
        }
      );
    } else {
      createEmployee(formValues, {
        onSuccess: () => {
          navigateToEmployees();
        },
      });
    }
  }

  function navigateToEmployees() {
    return navigate("/employees");
  }

  return (
    <>
      <SectionTitle title={isEditing ? "Editar" : "Cadastrar Funcionário"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-flow-col gap-4">
          <div className="grid">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs rounded-md"
              name="name"
              id="name"
              defaultValue={isEditing ? employee.name : ""}
              {...register("name", {required: "Nome é obrigatório"})}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p role="alert" className="text-red-500">
                {errors.name.message}
              </p>
            )}
            <label htmlFor="nationalID" className="mt-4">
              CPF
            </label>
            <InputMask
              type="text"
              className="input input-bordered input-sm w-full max-w-xs rounded-md"
              name="nationalID"
              id="nationalID"
              mask="999.999.999-99"
              defaultValue={isEditing ? employee.nationalID : ""}
              {...register("nationalID", {required: "CPF é obrigatório"})}
              aria-invalid={errors.nationalID ? "true" : "false"}
            />
            {errors.nationalID && (
              <p role="alert" className="text-red-500">
                {errors.nationalID.message}
              </p>
            )}
            <label htmlFor="rg" className="mt-4">
              RG
            </label>
            <InputMask
              type="text"
              className="input input-bordered input-sm w-full max-w-xs rounded-md"
              name="rg"
              id="rg"
              mask="99.999.999-9"
              defaultValue={isEditing ? employee.rg : ""}
              {...register("rg", {
                required: "RG é obrigatório",
              })}
              aria-invalid={errors.rg ? "true" : "false"}
            />
            {errors.rg && (
              <p role="alert" className="text-red-500">
                {errors.rg.message}
              </p>
            )}
            <label htmlFor="age" className="mt-4">
              Idade
            </label>
            <input
              type="number"
              className="input input-bordered input-sm w-full max-w-xs rounded-md"
              name="age"
              id="age"
              min="0"
              defaultValue={isEditing ? employee.age : ""}
              {...register("age", {
                required: "Idade é obrigatório",
                min: 0,
                valueAsNumber: true,
              })}
              aria-invalid={errors.age ? "true" : "false"}
            />
            {errors.age && (
              <p role="alert" className="text-red-500">
                {errors.age.message}
              </p>
            )}
          </div>
          <div className="grid">
            <label htmlFor="birthDate">Data De Nascimento</label>
            <input
              type="date"
              className="input input-bordered input-sm w-full max-w-xs rounded-md"
              name="birthDate"
              id="birthDate"
              defaultValue={
                isEditing ? defaultFormatDate(employee.birthDate) : null
              }
              {...register("birthDate", {
                required: "Data De Nascimento é obrigatório",
              })}
              aria-invalid={errors.birthDate ? "true" : "false"}
            />
            {errors.birthDate && (
              <p role="alert" className="text-red-500">
                {errors.birthDate.message}
              </p>
            )}
            <label htmlFor="entryDate" className="mt-4">
              Data De Entrada
            </label>
            <input
              type="date"
              className="input input-bordered input-sm w-full max-w-xs rounded-md"
              name="entryDate"
              id="entryDate"
              defaultValue={
                isEditing ? defaultFormatDate(employee.entryDate) : null
              }
              {...register("entryDate", {
                required: "Data De Entrada é obrigatório",
              })}
              aria-invalid={errors.entryDate ? "true" : "false"}
            />
            {errors.entryDate && (
              <p role="alert" className="text-red-500">
                {errors.entryDate.message}
              </p>
            )}

            <label htmlFor="role" className="mt-4">
              Cargo
            </label>
            <select
              className="select select-sm select-bordered w-full max-w-xs rounded-md select-md"
              name="role"
              id="role"
              defaultValue={isEditing ? employee.role : ""}
              {...register("role")}
            >
              <option defaultValue="Administrativo">Administrativo</option>
              <option>Jurídico</option>
              <option>Recepção</option>
              <option>Veterinário</option>
              <option>Recursos Humanos</option>
              <option>Serviços Gerais</option>
            </select>
          </div>
        </div>
        <div className="flex gap-x-4 justify-end mt-4">
          <button
            className="btn btn-glass rounded-md btn-sm"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Cancelar
          </button>
          <button
            className="btn btn-secondary rounded-md btn-sm"
            type="submit"
            disabled={isCreatingEmployee || isEditingEmployee}
          >
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}

export default Employee;
