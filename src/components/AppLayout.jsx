import {Outlet} from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="app-layout">
      <h1>sidebar</h1>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
