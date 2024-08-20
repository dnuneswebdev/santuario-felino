import {useMutation, useQueryClient} from "@tanstack/react-query";
import {editEmployee as editEmployeeApi} from "../../services/employeesApi";
import {toast} from "react-toastify";

export function useEditEmployee() {
  const queryClient = useQueryClient();
  const {mutate: editEmployee, isPending: isEditingEmployee} = useMutation({
    mutationFn: ({employee, id}) => editEmployeeApi(employee, id),
    onSuccess: () => {
      toast.success(`Funcionário editado com successo! 😀`);
      queryClient.invalidateQueries({queryKey: ["employees"]});
    },
    onError: (error) => {
      console.log(error);
      toast.error(`Não foi possível editar, houve um erro!`);
    },
  });

  return {isEditingEmployee, editEmployee};
}
