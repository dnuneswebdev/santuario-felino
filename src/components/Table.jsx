import {HiDotsVertical} from "react-icons/hi";
import Dropdown from "./Dropdown";
import Pagination from "./Pagination";
import StatusTag from "./StatusTag";

function Table({
  columns,
  data,
  hasActions,
  statusTag,
  dropdownItems,
  handleItemClick,
  count,
}) {
  const columnKeys = Object.keys(columns);
  const columnValues = Object.values(columns);

  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <h2 className="text-2xl mt-16">Nenhum dado encontrado.</h2>
      </div>
    );
  }

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
                  return (
                    <td
                      key={column}
                      className={`${column === "status" ? "w-1/5" : ""}`}
                    >
                      {column === "status" ? (
                        <StatusTag status={statusTag[item.status]}>
                          {item.status}
                        </StatusTag>
                      ) : item[column] === null ? (
                        "-"
                      ) : (
                        item[column]
                      )}
                    </td>
                  );
                })}
                {hasActions && (
                  <td>
                    <Dropdown
                      icon={<HiDotsVertical />}
                      dropdownItems={dropdownItems}
                      handleItemClick={(value) => handleItemClick(item, value)}
                    />
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination totalResults={count} />
    </div>
  );
}

export default Table;
