import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getEmployees} from "../../services/employeesApi";
import {useSearchParams} from "react-router-dom";
import {PAGE_SIZE} from "../../utils/constants";

export function useGetEmployees() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const filterValue = searchParams.get("name");
  const filter = !filterValue ? null : {field: "name", value: filterValue};

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isPending,
    data: {newData: employees, count} = {},
    error,
  } = useQuery({
    queryKey: ["employees", filter, page],
    queryFn: () => getEmployees({filter, page}),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["employees", filter, page + 1],
      queryFn: () => getEmployees({filter, page: page + 1}),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["employees", filter, page - 1],
      queryFn: () => getEmployees({filter, page: page - 1}),
    });

  return {isPending, error, employees, count};
}
