import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useUser} from "../hooks/useUser";

function ProtectedRoute({children}) {
  const navigate = useNavigate();

  const {isAuthenticated} = useUser();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, navigate]
  );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
