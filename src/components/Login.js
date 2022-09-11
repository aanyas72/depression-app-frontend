import "../styles/LoginAndSignUp.css";
import AuthenticationService from "../services/AuthenticationService";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await AuthenticationService.executeBasicAuthenticationService(
        email,
        password
      );
      AuthenticationService.registerSuccessfulLogin(email, password);
      AuthenticationService.registerUserDetails(
        await AuthenticationService.getUserDetails(email)
      );
      setShowSuccessMessage(true);
      navigate("/");
    } catch {
      setLoginFailed(true);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>Sign in</h1>
      {loginFailed && (
        <div className="error area" onClick={() => setLoginFailed(false)}>
          Incorrect username or password. Try again.
        </div>
      )}
      {showSuccessMessage && (
        <div
          className="success area"
          onClick={() => setShowSuccessMessage(false)}
        >
          Success! Logging in.
        </div>
      )}

      <form className="login area" onSubmit={handleSubmit}>
        <div className="label">Email</div>
        <input
          className="input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
        ></input>
        <div className="label">Password</div>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
        ></input>
        <button className="btn">Sign in</button>
      </form>

      <Link to="/signup" className="link">
        New? Sign up for an account
      </Link>
    </>
  );
};

export default Login;
