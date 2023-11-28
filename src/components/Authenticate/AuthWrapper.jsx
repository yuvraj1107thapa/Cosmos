import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";

const AuthWrapper = ({ children }) => {
  
  const location = useLocation();

  return localStorage.getItem("token") ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
};

export default AuthWrapper;
