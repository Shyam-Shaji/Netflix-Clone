import "./Login.css";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { login, logout, signup } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif";

export default function Login() {
  const [signInState, setSignInState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signInState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="loading-spinner">
      <img src={netflix_spinner} alt="" />
    </div>
  ) : (
    <div className="login">
      <img className="login-logo" src={Logo} alt="" />
      <div className="login-form">
        <h1>{signInState}</h1>
        <form action="">
          {signInState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {signInState}
          </button>
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
