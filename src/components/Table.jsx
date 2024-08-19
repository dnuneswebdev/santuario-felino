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
}) {
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
      <Pagination />
    </div>
  );
}

export default Table;
