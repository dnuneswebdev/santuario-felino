import {useQuery} from "@tanstack/react-query";
import {getEmployeesTotal} from "../../services/employeesApi";

export function useGetEmployeesTotal() {
  const {
    isPending,
    data: employees,
    error,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployeesTotal,
  });

  return {isPending, error, employees};
}
