import {useState} from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";
import SidebarLinks from "./SidebarLinks";
import {useSelector} from "react-redux";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const theme = useSelector((state) => state.userState.theme);

  function onToggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div
      className={`drawer fixed lg:drawer-open ${
        isSidebarOpen ? "reset-grid-cols" : ""
      }`}
    >
      <input id="sidebar" type="checkbox" className="drawer-toggle" />

      {/* app content */}
      <div className="drawer-content">
        <Header handleSidebar={onToggleSidebar} />
        <main className="py-16 px-8">
          <Outlet />
        </main>
      </div>

      {/* menu */}
      <div className="drawer-side z-10">
        <label
          htmlFor="sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul
          className={`menu text-base-content w-60 p-4 gap-y-2 min-h-full ${
            theme === "cupcake" ? "bg-white" : "bg-base-200"
          }`}
        >
          <img
            src={`${
              theme === "cupcake"
                ? "/src/assets/cat-logo-light.png"
                : "/src/assets/cat-logo-dark.png"
            }`}
            alt=""
            className="w-40 mx-auto mb-10 "
          />

          <SidebarLinks />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
