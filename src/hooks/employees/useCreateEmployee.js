import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEmployee as createEmployeeApi} from "../../services/employeesApi";
import {toast} from "react-toastify";

export function useCreateEmployee() {
  const queryClient = useQueryClient();
  const {mutate: createEmployee, isPending: isCreatingEmployee} = useMutation({
    mutationFn: createEmployeeApi,
    onSuccess: () => {
      toast.success(`Funcionário cadastrado com successo! 🙂`);
      queryClient.invalidateQueries({queryKey: ["employees"]});
    },
    onError: (error) => {
      console.log(error);
      toast.error(`Não foi possível cadastrar, houve um erro!`);
    },
  });

  return {createEmployee, isCreatingEmployee};
}
