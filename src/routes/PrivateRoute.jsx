/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoadingSpinner from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    // Show loader while checking authentication
    return <LoadingSpinner />;
  }

  if (user) {
    // User is authenticated, render the children
    return children;
  }

  // Redirect to login with the state of the previous location
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
