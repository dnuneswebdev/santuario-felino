import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./components/AppLayout";
import Error from "./pages/Error";
import Cats from "./pages/Cats";
import Employees from "./pages/Employees";
import Cat from "./pages/Cat";
import Employee from "./pages/Employee";
import ProtectedRoute from "./components/ProtectedRoute";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {path: "/", element: <Dashboard />},
      {path: "/cats", element: <Cats />},
      {path: "/cats/:id", element: <Cat />},
      {path: "/employees", element: <Employees />},
      {path: "/employees/:id", element: <Employee />},
    ],
  },
  {path: "/login", element: <Login />},
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
