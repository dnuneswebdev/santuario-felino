import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createCat as createCatApi} from "../../services/catsApi";
import {toast} from "react-toastify";

export function useCreateCat() {
  const queryClient = useQueryClient();
  const {mutate: createCat, isPending: isCreatingCat} = useMutation({
    mutationFn: createCatApi,
    onSuccess: () => {
      toast.success(`Felino cadastrado com successo! 😻`);
      queryClient.invalidateQueries({queryKey: ["cats"]}); //faz o fetch novamente para atualizar a pagina
    },
    onError: (error) => {
      console.log(error);
      toast.error(`Não foi possível cadastrar, houve um erro!`);
    },
  });

  return {isCreatingCat, createCat};
}
