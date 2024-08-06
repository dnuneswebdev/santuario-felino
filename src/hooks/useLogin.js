import {useMutation, useQueryClient} from "@tanstack/react-query";
import {login as loginApi} from "../services/Auth.js";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {mutate: login, isPending} = useMutation({
    mutationFn: ({email, password}) => loginApi({email, password}),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Bem-vindo, Admin! 😃");
      navigate("/", {replace: true});
    },
    onError: (error) => {
      console.log(error);
      toast.error("Email ou senha inválidos");
    },
  });

  return {isPending, login};
}
