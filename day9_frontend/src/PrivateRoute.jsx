import { Navigate, Outlet } from "react-router-dom";

export default PrivateRoute = ({ allowedRoles }) => {
  const role = Number(localStorage.getItem("role"));

  if (allowedRoles.includes(role)) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
};
