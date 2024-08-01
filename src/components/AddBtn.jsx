import {HiPlus} from "react-icons/hi";

function AddBtn({onClickAdd}) {
  return (
    <>
      <button
        className="btn rounded-md btn-secondary add-btn btn-sm"
        onClick={() => onClickAdd()}
      >
        <HiPlus />
      </button>
    </>
  );
}

export default AddBtn;
