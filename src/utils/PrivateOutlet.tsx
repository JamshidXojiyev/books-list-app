import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function PrivateOutlet() {
  const user = useAuth().user;
  const location = useLocation();

  if (user.key && user.secret) {
    return <Outlet />;
  } else {
    return <Navigate to="/sign-up" state={{ from: location }} />;
  }
}
