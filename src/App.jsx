import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./components/AppLayout";
import Error from "./pages/Error";
import Cats from "./pages/Cats";
import Employees from "./pages/Employees";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {path: "/cats", element: <Cats />},
      {path: "/employees", element: <Employees />},
    ],
  },
  {path: "/login", element: <Login />},
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
