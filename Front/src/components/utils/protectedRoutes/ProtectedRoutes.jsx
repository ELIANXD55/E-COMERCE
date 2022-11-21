import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  if (sessionStorage.getItem("token")) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
