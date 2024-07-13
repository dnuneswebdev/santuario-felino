import {Outlet} from "react-router-dom";

function AppLayout() {
  return (
    <div className="app-layout">
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
