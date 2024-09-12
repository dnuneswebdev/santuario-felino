import {useRef} from "react";
import {useUploadCatImage} from "../hooks/cats/useUploadCatImage";
import {ImSpinner9} from "react-icons/im";
import StatusTag from "./StatusTag";

function ViewCat({cat, statusTag}) {
  const fileInputRef = useRef();
  const {uploadCatImage, isUploading} = useUploadCatImage();

  function onImageClick() {
    return fileInputRef.current.click();
  }

  function onSelectImage(e) {
    const imageFile = e.target.files[0];

    uploadCatImage(
      {imageFile, id: cat.id},
      {
        onSuccess: (newCatImage) => {
          cat.image = newCatImage;
        },
      }
    );
  }

  return (
    <>
      <div className="flex lg:gap-16 flex-col lg:flex-row text-center lg:text-left">
        <div className="col-span-3">
          <input
            type="file"
            className="file-input file-input-ghost hidden"
            accept="image/*"
            ref={fileInputRef}
            onChange={onSelectImage}
          />
          {isUploading ? (
            <ImSpinner9 className="spinner w-6 h-6" />
          ) : (
            <div className="tooltip tooltip-bottom" data-tip="Carregar Imagem">
              <img
                src={cat.image ? cat.image : "/assets/cat-default.png"}
                className="lg:w-48 lg:h-48 rounded-md cursor-pointer"
                onClick={onImageClick}
              />
            </div>
          )}
        </div>
        <div className="col-span-3 mt-4 lg:mt-0">
          <h4 className="font-bold">Raça:</h4>
          <p>{cat.breed}</p>
          <h4 className="font-bold mt-4">Idade:</h4>
          <p>{cat.age}</p>
          <h4 className="font-bold mt-4">Cor:</h4>
          <p>{cat.color}</p>
          <h4 className="font-bold mt-4">Peso:</h4>
          <p>{cat.weight}kg</p>
        </div>
        <div className="col-span-3 mt-4 lg:mt-0">
          <h4 className="font-bold">FIV:</h4>
          <p>{cat.fiv ? "Sim" : "Não"}</p>
          <h4 className="font-bold mt-4">FELV:</h4>
          <p>{cat.felv ? "Sim" : "Não"}</p>
          <h4 className="font-bold mt-4">Vacinado:</h4>
          <p>{cat.vacinated ? "Sim" : "Não"}</p>
          <h4 className="font-bold mt-4">Microchip Nº:</h4>
          <p>{cat.microchipNumber}</p>
        </div>
        <div className="col-span-3 mt-4 lg:mt-0">
          <h4 className="font-bold">Data De Entrada:</h4>
          <p>{cat.entryDate}</p>
          <h4 className="font-bold mt-4">Data De Saída:</h4>
          <p>{cat.departureDate ? cat.departureDate : "-"}</p>
          <h4 className="font-bold mt-4">Status:</h4>
          <StatusTag status={statusTag[cat.status]}>{cat.status}</StatusTag>
        </div>
      </div>
      <div className="flex lg:gap-16 flex-col lg:flex-row mt-4">
        <div className="col-span-3">
          <h4 className="font-bold">Descrição:</h4>
          <p>{cat.description}</p>
          <h4 className="font-bold mt-4">Observações Médicas:</h4>
          <p>{cat.healthComments}</p>
        </div>
      </div>
    </>
  );
}

export default ViewCat;
