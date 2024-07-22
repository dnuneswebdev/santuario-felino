import {HiDotsVertical} from "react-icons/hi";
import Dropdown from "./Dropdown";
import Pagination from "./Pagination";

function Table({columns, data, hasActions}) {
  const columnKeys = Object.keys(columns);
  const columnValues = Object.values(columns);

  return (
    <div className="overflow-x-auto h-full">
      <table className="table table-zebra">
        <thead className="text-center">
          <tr>
            {columnValues.map((column) => (
              <td key={column}>{column}</td>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((item) => {
            return (
              <tr key={item.id}>
                {columnKeys.map((column) => {
                  return <td key={column}>{item[column]}</td>;
                })}
                {hasActions && (
                  <td>
                    <Dropdown icon={<HiDotsVertical />} />
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

export default Table;
