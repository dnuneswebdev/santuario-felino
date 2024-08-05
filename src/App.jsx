import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./components/AppLayout";
import Error from "./pages/Error";
import Cats from "./pages/Cats";
import Employees from "./pages/Employees";
import Cat from "./pages/Cat";
import Employee from "./pages/Employee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {path: "/cats", element: <Cats />},
      {path: "/cats/:id", element: <Cat />},
      {path: "/employees", element: <Employees />},
      {path: "/employees/:id", element: <Employee />},
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
