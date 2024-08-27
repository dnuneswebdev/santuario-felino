import {useQuery} from "@tanstack/react-query";
import {getEmployees} from "../../services/employeesApi";
import {useSearchParams} from "react-router-dom";

export function useGetEmployees() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("name");
  const filter = !filterValue ? null : {field: "name", value: filterValue};

  const {
    isPending,
    data: employees,
    error,
  } = useQuery({
    queryKey: ["employees", filter],
    queryFn: () => getEmployees({filter}),
  });

  return {isPending, error, employees};
}
