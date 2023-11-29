import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";

const AuthWrapper = ({ children }) => {
  const { encodedToken } = useContext(DataContext);

  return encodedToken ? children : <Navigate to="/" />;
};

export default AuthWrapper;
