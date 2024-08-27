import {useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

function Filters({filterField, sortFields}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const {register, reset} = useForm();

  function onSearch(e) {
    e.preventDefault();
    const value = e.target.value;

    searchParams.set(filterField.value, value);
    setSearchParams(searchParams);
  }

  function onSortBy(e) {
    const value = e.target.value;

    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }

  function clearAllSearchParams() {
    searchParams.set("name", "");
    searchParams.set("sortBy", "");
    searchParams.delete("name");
    searchParams.delete("sortBy");
    setSearchParams(searchParams);
    reset();
  }

  return (
    <div>
      <form className="my-4 flex gap-4 w-full">
        <input
          type="text"
          className="input input-bordered input-sm w-48 rounded-md"
          placeholder={filterField.field}
          name={filterField.value}
          defaultValue={searchParams.get("name") || ""}
          autoFocus
          {...register("name", {onChange: (e) => onSearch(e)})}
        />
        {sortFields && (
          <select
            className="select select-sm select-bordered w-48 rounded-md select-md"
            placeholder="Status"
            defaultValue={searchParams.get("sortBy") || ""}
            {...register("status", {onChange: (e) => onSortBy(e)})}
          >
            <option disabled={true} value="">
              Ordenar por
            </option>
            {sortFields.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        )}
        {searchParams.size > 0 && (
          <button
            type="button"
            className="btn btn-sm btn-secondary rounded-md"
            onClick={clearAllSearchParams}
            hidden
          >
            Limpar
          </button>
        )}
      </form>
    </div>
  );
}

export default Filters;
