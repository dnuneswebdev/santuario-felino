import {BsMoonFill, BsSunFill} from "react-icons/bs";
import {PiLineVerticalThin} from "react-icons/pi";
import {MdLogout} from "react-icons/md";
import {CiMenuBurger} from "react-icons/ci";

function Header({handleSidebar}) {
  return (
    <div className={`bg-white w-full h-14 flex items-center p-4`}>
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
        <label className="swap swap-rotate">
          <input type="checkbox" className="theme-controller" />
          <BsSunFill className="swap-on h-5 w-5" />
          <BsMoonFill className="swap-off h-5 w-5" />
        </label>
        <button className="btn btn-ghost btn-sm rounded-md btn-secondary">
          <MdLogout className="size-5" />
        </button>
      </div>
    </div>
  );
}

export default Header;
