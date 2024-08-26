import {useQuery} from "@tanstack/react-query";
import {getCats} from "../../services/catsApi";
import {useSearchParams} from "react-router-dom";

export function useGetCats() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("name");
  const filter = !filterValue ? null : {field: "name", value: filterValue};

  const sortByRaw = searchParams.get("sortBy") || "status-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = {field, direction};

  const {
    isPending,
    data: cats,
    error,
  } = useQuery({
    queryKey: ["cats", filter, sortBy],
    queryFn: () => getCats({filter, sortBy}),
  });

  return {isPending, error, cats};
}
