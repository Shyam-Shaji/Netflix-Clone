import "./Login.css";
import Logo from "../../assets/logo.png";
import { useState } from "react";

export default function Login() {
  const [signInState, setSignInState] = useState("Sign In");

  return (
    <div className="login">
      <img className="login-logo" src={Logo} alt="" />
      <div className="login-form">
        <h1>{signInState}</h1>
        <form action="">
          {signInState === "Sign Up" ? (
            <input type="text" placeholder="Your Name" />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{signInState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signInState === "Sign In" ? (
            <p>
              New to Netflix?
              <span
                onClick={() => {
                  setSignInState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?
              <span
                onClick={() => {
                  setSignInState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
