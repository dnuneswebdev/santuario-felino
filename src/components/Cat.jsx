import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import SectionTitle from "./SectionTitle";

function Cat() {
  const params = useParams();
  const isEditing = params.id !== "add";
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigate = useNavigate();

  function onSubmit(formValues) {
    console.log("🚀 ~ onSubmit ~ formValues:", formValues);
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
              {...register("microchipNumber", {min: 0, valueAsNumber: true})}
            />
            <label htmlFor="status" className="mt-4">
              Status
            </label>
            <select
              className="select select-sm select-bordered w-full max-w-xs rounded-md select-md"
              name="status"
              id="status"
              {...register("status")}
            >
              <option defaultValue="adotado">Adotado</option>
              <option>Pronto Para Adoção</option>
              <option>Em Recuperação</option>
              <option>Enfermo</option>
            </select>
          </div>
          <div className="grid">
            <label htmlFor="fiv">FIV</label>
            <input
              type="checkbox"
              className="checkbox checkbox-secondary rounded-md"
              name="fiv"
              id="fiv"
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
          <button className="btn btn-secondary rounded-md btn-sm" type="submit">
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}

export default Cat;
