import {useMutation, useQueryClient} from "@tanstack/react-query";
import {logout as logoutApi} from "../services/Auth.js";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {mutate: logout, isPending} = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", {replace: true});
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  return {isPending, logout};
}
