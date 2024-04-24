import { Navigate } from "react-router-dom";
import { checkAuth } from "../utils/checkAuth";

const PrivateRoute = ({ children }) => {
  const loged = checkAuth();
  

  if (loged) {
    return children;
  } else {
    return <Navigate to="/"/>;
  }
};

export default PrivateRoute;
