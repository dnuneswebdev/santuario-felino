import {useMutation, useQueryClient} from "@tanstack/react-query";
import {editCat as editCatApi} from "../../services/catsApi";
import {toast} from "react-toastify";

export function useEditCat() {
  const queryClient = useQueryClient();
  const {mutate: editCat, isPending: isEditingCat} = useMutation({
    mutationFn: ({cat, id}) => editCatApi(cat, id),
    onSuccess: () => {
      toast.success(`Felino editado com successo! 😻`);
      queryClient.invalidateQueries({queryKey: ["cats"]});
    },
    onError: (error) => {
      console.log(error);
      toast.error(`Não foi possível editar, houve um erro!`);
    },
  });

  return {isEditingCat, editCat};
}
