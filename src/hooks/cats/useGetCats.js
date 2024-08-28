import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getCats} from "../../services/catsApi";
import {useSearchParams} from "react-router-dom";
import {PAGE_SIZE} from "../../utils/constants";

export function useGetCats() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const filterValue = searchParams.get("name");
  const filter = !filterValue ? null : {field: "name", value: filterValue};

  const sortByRaw = searchParams.get("sortBy") || "status-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = {field, direction};

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isPending,
    data: {newData: cats, count} = {},
    error,
  } = useQuery({
    queryKey: ["cats", filter, sortBy, page],
    queryFn: () => getCats({filter, sortBy, page}),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["cats", filter, sortBy, page + 1],
      queryFn: () => getCats({filter, sortBy, page: page + 1}),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["cats", filter, sortBy, page - 1],
      queryFn: () => getCats({filter, sortBy, page: page - 1}),
    });

  return {isPending, error, cats, count};
}
