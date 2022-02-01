import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../contexts/authContext";

function AuthRoute({ children }) {
  const { author } = useContext(AuthContext);
  return author ? children : <Navigate to="/" />;
}

export default AuthRoute;
