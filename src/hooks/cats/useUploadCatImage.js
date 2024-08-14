import {useMutation, useQueryClient} from "@tanstack/react-query";
import {uploadCatImage as uploadCatImageApi} from "../../services/catsApi";
import {toast} from "react-toastify";

export function useUploadCatImage() {
  const queryClient = useQueryClient();

  const {mutate: uploadCatImage, isPending: isUploading} = useMutation({
    mutationFn: ({imageFile, id}) => uploadCatImageApi(imageFile, id),
    onSuccess: () => {
      toast.success(`Imagem salva com sucesso! 😸`);
      queryClient.invalidateQueries({queryKey: ["cats"]});
    },
    onError: (error) => {
      toast.error(`Erro! Imagem não pode ser salva no momento.`),
        console.log(error);
    },
  });

  return {isUploading, uploadCatImage};
}
