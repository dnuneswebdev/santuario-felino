import {useRef} from "react";
import {useUploadEmployeeImage} from "../hooks/employees/useUploadEmployeeImage";
import {ImSpinner9} from "react-icons/im";

function ViewEmployee({employee}) {
  const fileInputRef = useRef();
  const {uploadEmployeeImage, isUploading} = useUploadEmployeeImage();

  function onImageClick() {
    return fileInputRef.current.click();
  }

  function onSelectImage(e) {
    const imageFile = e.target.files[0];

    uploadEmployeeImage(
      {imageFile, id: employee.id},
      {
        onSuccess: (newEmployeeImage) => {
          employee.image = newEmployeeImage;
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
                src={employee.image ? employee.image : "/src/assets/user.png"}
                className="lg:w-48 lg:h-48 rounded-md cursor-pointer"
                onClick={onImageClick}
              />
            </div>
          )}
        </div>
        <div className="col-span-3 mt-4 lg:mt-0">
          <h4 className="font-bold">Nome:</h4>
          <p>{employee.name}</p>
          <h4 className="font-bold mt-4">CPF:</h4>
          <p>{employee.nationalID}</p>
          <h4 className="font-bold mt-4">RG:</h4>
          <p>{employee.rg}</p>
          <h4 className="font-bold mt-4">Idade:</h4>
          <p>{employee.age} anos</p>
        </div>
        <div className="col-span-3 mt-4 lg:mt-0">
          <h4 className="font-bold">Data De Nascimento:</h4>
          <p>{employee.birthDate}</p>
          <h4 className="font-bold mt-4">Data De Entrada:</h4>
          <p>{employee.entryDate}</p>
          <h4 className="font-bold mt-4">Cargo:</h4>
          <p>{employee.role}</p>
        </div>
      </div>
    </>
  );
}

export default ViewEmployee;
