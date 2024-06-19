import { Navigate } from "react-router-dom";
import { useAuth } from "./utils/auth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user?.isLoggedIn) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
