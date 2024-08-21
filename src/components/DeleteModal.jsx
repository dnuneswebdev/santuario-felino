function DeleteModal({handleDelete}) {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-2">
        <h2 className="text-2xl">
          Tem certeza que deseja excluir este funcionário?
        </h2>
        <p>Esta ação não pode ser desfeita.</p>
        <button
          className="btn btn-error btn-sm rounded-md mt-4"
          onClick={() => handleDelete()}
        >
          Confirmar
        </button>
      </div>
    </>
  );
}

export default DeleteModal;
