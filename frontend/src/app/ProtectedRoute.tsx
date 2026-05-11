import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectProp {
  children: React.ReactNode;
}

const ProtectedRoute = ({
  children,
}: ProtectProp) => {

  const { authUser } = useAuth();

  // if (!authUser) {
  //   return <Navigate to="/login" replace />;
  // }

  return children;
};

export default ProtectedRoute;