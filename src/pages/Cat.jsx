import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useCreateCat} from "../hooks/cats/useCreateCat";
import {useEditCat} from "../hooks/cats/useEditCat";
import {useSelector} from "react-redux";
import {defaultFormatDate} from "../utils/helpers";
import SectionTitle from "../components/SectionTitle";

function Cat() {
  const cat = useSelector((state) => state.cat.cat);
  const {createCat, isCreatingCat} = useCreateCat();
  const {editCat, isEditingCat} = useEditCat();
  const params = useParams();
  const isEditing = params.id !== "add";
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigate = useNavigate();

  function onSubmit(formValues) {
    console.log(formValues);
    formValues.departureDate === ""
      ? (formValues.departureDate = null)
      : formValues.departureDate;

    if (isEditing) {
      editCat(
        {cat: formValues, id: cat.id},
        {
          onSuccess: () => {
            navigate("/cats");
          },
        }
      );
    } else {
      createCat(formValues, {
        onSuccess: () => {
          navigate("/cats");
        },
      });
    }
  }

  return (
    <>
      <SectionTitle title={isEditing ? "Editar" : "Cadastrar Felino"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-flow-col gap-4">
          <div className="grid">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs rounded-md"
              name="name"
              id="name"
              defaultValue={isEditing ? cat.name : ""}
              {...register("name", {required: "Nome é obrigatório"})}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p role="alert" className="text-red-500">
                {errors.name.message}
              </p>
            )}
            <label htmlFor="breed" className="mt-4">
              Raça
            </label>
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs rounded-md"
              name="breed"
              id="breed"
              defaultValue={isEditing ? cat.breed : ""}
              {...register("breed", {required: "Raça é obrigatório"})}
              aria-invalid={errors.breed ? "true" : "false"}
            />
            {errors.breed && (
              <p role="alert" className="text-red-500">
                {errors.breed.message}
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
              step=".01"
              defaultValue={isEditing ? cat.age : ""}
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
            <label htmlFor="weight" className="mt-4">
              Peso
            </label>
            <input
              type="number"
              className="input input-bordered input-sm w-full max-w-xs rounded-md"
              name="weight"
              id="weight"
              min="0"
              step=".01"
              defaultValue={isEditing ? cat.weight : ""}
              {...register("weight", {
                required: "Peso é obrigatório",
                min: 0,
                valueAsNumber: true,
              })}
              aria-invalid={errors.weight ? "true" : "false"}
            />
            {errors.weight && (
              <p role="alert" className="text-red-500">
                {errors.weight.message}
              </p>
            )}
          </div>
          <div className="grid">
            <label htmlFor="entryDate">Data De Entrada</label>
            <input
              type="date"
              className="input input-bordered input-sm w-full max-w-xs rounded-md"
              name="entryDate"
              id="entryDate"
              defaultValue={isEditing ? defaultFormatDate(cat.entryDate) : null}
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
            <label htmlFor="departureDate" className="mt-4">
              Data De Saída
            </label>
            <input
              type="date"
              className="input input-bordered input-sm w-full max-w-xs rounded-md"
              name="departureDate"
              id="departureDate"
              defaultValue={
                isEditing && cat.departureDate
                  ? defaultFormatDate(cat.departureDate)
                  : null
              }
              {...register("departureDate")}
            />
            <label htmlFor="microchipNumber" className="mt-4">
              Microchip Nº
            </label>
            <input
              type="number"
              className="input input-bordered input-sm w-full max-w-xs rounded-md"
              name="microchipNumber"
              id="microchipNumber"
              min="0"
              defaultValue={isEditing ? cat.microchipNumber : ""}
              {...register("microchipNumber", {min: 0, valueAsNumber: true})}
            />
            <label htmlFor="color" className="mt-4">
              Cor
            </label>
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs rounded-md"
              name="color"
              id="color"
              defaultValue={isEditing ? cat.color : ""}
              {...register("color", {required: "Cor é obrigatório"})}
              aria-invalid={errors.color ? "true" : "false"}
            />
            {errors.color && (
              <p role="alert" className="text-red-500">
                {errors.color.message}
              </p>
            )}
          </div>
          <div className="grid">
            <label htmlFor="status">Status</label>
            <select
              className="select select-sm select-bordered w-full max-w-xs rounded-md select-md"
              name="status"
              id="status"
              {...register("status")}
              defaultValue={isEditing ? cat.status : ""}
            >
              <option defaultValue="adotado">Adotado</option>
              <option>Pronto Para Adoção</option>
              <option>Em Recuperação</option>
              <option>Enfermo</option>
            </select>
            <label htmlFor="fiv" className="mt-4">
              FIV
            </label>
            <input
              type="checkbox"
              className="checkbox checkbox-secondary rounded-md"
              name="fiv"
              id="fiv"
              defaultChecked={isEditing ? cat.fiv : false}
              {...register("fiv")}
            />
            <label htmlFor="felv" className="mt-4">
              FELV
            </label>
            <input
              type="checkbox"
              className="checkbox checkbox-secondary rounded-md"
              name="felv"
              id="felv"
              defaultChecked={isEditing ? cat.felv : false}
              {...register("felv")}
            />
            <label htmlFor="vacinated" className="mt-4">
              Vacinado
            </label>
            <input
              type="checkbox"
              className="checkbox checkbox-secondary rounded-md"
              name="vacinated"
              id="vacinated"
              defaultChecked={isEditing ? cat.vacinated : false}
              {...register("vacinated")}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-4 gap-4">
          <div className="grid w-full">
            <label htmlFor="description" className="mt-4">
              Descrição
            </label>
            <textarea
              className="textarea textarea-bordered w-full rounded-md"
              name="description"
              id="description"
              rows="4"
              defaultValue={isEditing ? cat.description : ""}
              {...register("description")}
            />
          </div>
          <div className="grid w-full">
            <label htmlFor="healthComments" className="mt-4">
              Observações Médicas
            </label>
            <textarea
              className="textarea textarea-bordered w-full rounded-md"
              name="healthComments"
              id="healthComments"
              rows="4"
              defaultValue={isEditing ? cat.healthComments : ""}
              {...register("healthComments")}
            />
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
            disabled={isCreatingCat || isEditingCat}
          >
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}

export default Cat;
