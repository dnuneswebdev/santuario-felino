import {PiLineVerticalThin} from "react-icons/pi";
import {MdLogout} from "react-icons/md";
import {CiMenuBurger} from "react-icons/ci";
import DarkModeToggle from "./DarkModeToggle";
import {useSelector} from "react-redux";

function Header({handleSidebar}) {
  const theme = useSelector((state) => state.userState.theme);

  return (
    <div
      className={`w-full h-14 flex items-center p-4 ${
        theme === "cupcake" ? "bg-white" : "bg-base-200"
      }`}
    >
      <label
        htmlFor="sidebar"
        className="btn btn-sm rounded-md btn-ghost drawer-button"
        onClick={() => handleSidebar()}
      >
        <CiMenuBurger className="size-5" />
      </label>
      <div className="flex justify-end items-center w-full gap-x-2">
        <div className="avatar flex items-center">
          <div className="ring-secondary rounded-full ring ring-offset-0 w-8 mr-2">
            <img src="src/assets/avatar.png" />
          </div>
          <p className="font-semibold">Admin</p>
        </div>
        <p>
          <PiLineVerticalThin />
        </p>
        <DarkModeToggle />
        <button className="btn btn-ghost btn-sm rounded-md btn-secondary">
          <MdLogout className="size-5" />
        </button>
      </div>
    </div>
  );
}

export default Header;
