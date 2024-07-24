import {HiDotsVertical} from "react-icons/hi";
import Dropdown from "./Dropdown";
import Pagination from "./Pagination";
import StatusTag from "./StatusTag";

function Table({columns, data, hasActions, statusTag, dropdownItems}) {
  const columnKeys = Object.keys(columns);
  const columnValues = Object.values(columns);

  function handleItemClick(value) {
    document.getElementById("modal").showModal();
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
                    <td key={column}>
                      {column === "status" ? (
                        <StatusTag status={statusTag[item.status]}>
                          {item.status}
                        </StatusTag>
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
                      handleItemClick={handleItemClick}
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
