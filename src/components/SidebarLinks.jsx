import {NavLink} from "react-router-dom";
import {IoHome} from "react-icons/io5";
import {PiCatFill} from "react-icons/pi";
import {HiUsers} from "react-icons/hi2";

const links = [
  {id: 1, url: "/", text: "Início", icon: <IoHome />},
  {id: 2, url: "/cats", text: "Felinos", icon: <PiCatFill />},
  {id: 3, url: "/employees", text: "Funcionários", icon: <HiUsers />},
];

function SidebarLinks() {
  return (
    <>
      {links.map((link) => {
        const {id, url, text, icon} = link;

        return (
          <li key={id}>
            <NavLink to={url} className="rounded-md font-semibold">
              {icon} {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}

export default SidebarLinks;
