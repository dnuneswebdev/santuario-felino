import {useQuery} from "@tanstack/react-query";
import {getEmployees} from "../../services/employeesApi";

export function useGetEmployees() {
  const {
    isPending,
    data: employees,
    error,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

  return {isPending, error, employees};
}
