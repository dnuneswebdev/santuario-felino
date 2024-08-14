import {useMutation, useQueryClient} from "@tanstack/react-query";
import {uploadEmployeeImage as uploadEmployeeImageApi} from "../../services/employeesApi";
import {toast} from "react-toastify";

export function useUploadEmployeeImage() {
  const queryClient = useQueryClient();

  const {mutate: uploadEmployeeImage, isPending: isUploading} = useMutation({
    mutationFn: ({imageFile, id}) => uploadEmployeeImageApi(imageFile, id),
    onSuccess: () => {
      toast.success(`Imagem salva com sucesso! 😸`);
      queryClient.invalidateQueries({queryKey: ["employees"]});
    },
    onError: (error) => {
      toast.error(`Erro! Imagem não pode ser salva no momento.`),
        console.log(error);
    },
  });

  return {isUploading, uploadEmployeeImage};
}
