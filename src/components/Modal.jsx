function Modal({children, title, id}) {
  return (
    <div>
      <dialog id={id} className="modal">
        <div className="modal-box max-w-3xl w-100">
          <h3 className="font-bold text-2xl mb-4 text-center ">{title}</h3>
          <>{children}</>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm rounded-md btn-ghost absolute right-2 top-2 ">
                ✕
              </button>
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
