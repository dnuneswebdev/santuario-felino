import {useQuery} from "@tanstack/react-query";
import {getCatsTotal} from "../../services/catsApi";

export function useGetCatsTotal() {
  const {
    isPending,
    data: cats,
    error,
  } = useQuery({
    queryKey: ["cats"],
    queryFn: getCatsTotal,
  });

  return {isPending, error, cats};
}
