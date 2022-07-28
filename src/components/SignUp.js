import "../styles/LoginAndSignUp.css";

import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
  const [createLoginFailed, setCreateLoginFailed] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
    
    return (
      <>
        <h1 style={{ marginBottom: "10px" }}>Sign up for an account</h1>

        {createLoginFailed && (
          <div className="error box">
            Error creating new user. Reload and try again.
          </div>
        )}
        {showSuccessMessage && (
          <div className="success box">
            Your account has been successfully created! Go back to the
            <Link to="/login" className="login-link">
              login
            </Link>
            page to sign in and get started!
          </div>
        )}

        <form className="login area" onSubmit={handleSubmit}>
          <div className="label">Username</div>
          <input
            className="input"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="username"
          ></input>

          <div className="label">Email</div>
          <input
            className="input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
          ></input>

          <div className="label">Enter password</div>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="new-password"
          ></input>
          <div className="label">Re-enter password</div>
          <input
            type="password"
            className="input"
            value={retypedPassword}
            onChange={(event) => setRetypedPassword(event.target.value)}
            autoComplete="new-password"
          ></input>

          <button
            className="btn"
            type="submit"
            disabled={
              name.length > 0 &&
              email.length > 0 &&
              password.length > 0 &&
              retypedPassword.length > 0 &&
              password === retypedPassword
                ? false
                : true
            }
          >
            Create account
          </button>
        </form>

        <Link to="/login" className="link">
          Already have an account? Sign in
        </Link>
      </>
    );
}

export default SignUp;