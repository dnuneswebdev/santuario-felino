function Dropdown({icon}) {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 btn-sm rounded-md btn-ghost"
      >
        {icon}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-md z-[1] w-52 p-2 shadow"
      >
        <li>
          <a>Visualizar</a>
        </li>
        <li>
          <a>Editar</a>
        </li>
        <li>
          <a>Deletar</a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
