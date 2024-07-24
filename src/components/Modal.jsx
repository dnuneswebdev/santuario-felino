function Modal() {
  return (
    <div>
      <dialog id="modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Modal</h3>
          <p className="py-4">Conteudo</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm rounded-md btn-ghost absolute right-2 top-2 ">
                ✕
              </button>
              <button className="btn btn-sm rounded-md">Cancelar</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button></button>
        </form>
      </dialog>
    </div>
  );
}

export default Modal;
