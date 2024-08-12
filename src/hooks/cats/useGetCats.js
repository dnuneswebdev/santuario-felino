import {useQuery} from "@tanstack/react-query";
import {getCats} from "../../services/catsApi";

export function useGetCats() {
  const {
    isPending,
    data: cats,
    error,
  } = useQuery({
    queryKey: ["cats"],
    queryFn: getCats,
  });

  return {isPending, error, cats};
}
