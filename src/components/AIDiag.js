import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AuthenticationService from "../services/AuthenticationService";
import Header from "./Header";

const AIDiag = () => {
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!AuthenticationService.isUserLoggedIn()) {
      navigate("/login");
    }
  });

  return (
    <>
      {AuthenticationService.isUserLoggedIn() ? (
        <>
          <Header />
          <h1>
            Diagnostic for{" "}
            {location.state.date != null ? location.state.date : ""}
          </h1>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default AIDiag;
