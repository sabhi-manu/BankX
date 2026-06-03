import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectProp {
  children: React.ReactNode;
}

<<<<<<< HEAD
const ProtectedRoute = ({
  children,
}: ProtectProp) => {
  const { authUser, isAuthLoading } = useAuth();

  if (isAuthLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Checking session...
      </div>
    );
  }
=======
const ProtectedRoute = ({ children }: ProtectProp) => {
  const { authUser, isLoading } = useAuth();

  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white shadow-lg rounded-2xl px-10 py-8 flex flex-col items-center gap-5">
          
      
          <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
>>>>>>> c289bd4b7bb7b72dec1378dac43e1be1fd5ea158

         
          <div className="text-center">
            <h2 className="text-xl font-bold text-slate-800">
              Loading...
            </h2>
          </div>
        </div>
      </div>
    );
  }

  // Redirect if not logged in
  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;