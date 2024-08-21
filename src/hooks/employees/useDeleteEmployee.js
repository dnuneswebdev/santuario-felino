import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteEmployee as deleteEmployeeApi} from "../../services/employeesApi";
import {toast} from "react-toastify";

export function useDeleteEmployee() {
  const queryClient = useQueryClient();

  const {mutate: deleteEmployee, isPending: isDeleting} = useMutation({
    mutationFn: deleteEmployeeApi,
    onSuccess: () => {
      toast.success("Funcionário deletado com sucesso!");
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });
    },
    onError: (err) => {
      console.log(err);
      toast.error("O Funcionário não pode ser deletado.");
    },
  });

  return {isDeleting, deleteEmployee};
}
