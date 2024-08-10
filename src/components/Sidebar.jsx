import {useState} from "react";
import {Outlet, useNavigation} from "react-router-dom";
import Header from "./Header";
import SidebarLinks from "./SidebarLinks";
import {useSelector} from "react-redux";
import Loading from "./Loading";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
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
        <main className="p-8">{isPageLoading ? <Loading /> : <Outlet />}</main>
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
