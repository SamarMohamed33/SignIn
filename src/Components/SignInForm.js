import "../CSS/FrontStyle.css";
import { useState } from "react";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsTelegram,
  BsLockFill,
} from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
function SignInForm(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === "" || name === "") {
      setError("Username or Password is Wrong");
    } else {
      setError("");
    }
  };
  function createAccount() {
    props.sendData();
  }
  return (
    <div className="signin">
      <h1>Sign In</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="form-label">Username</label>
            <FaUserAlt className="icons" />
            <input
              type="text"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Password</label>
            <BsLockFill className="icons" />
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <span style={{ color: "red" }}>{error}</span>
          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <input type="submit" value="LOG IN" className="submit-btn" />
        </form>
        <hr />
        <div className="links">
          <h4>Log in using your account on:</h4>
          <div>
            <BsFacebook />
            <BsTwitter />
            <BsLinkedin />
            <BsTelegram />
          </div>
        </div>
        <button onClick={createAccount} className="flip">
          Create an Account
        </button>
      </div>
    </div>
  );
}

export default SignInForm;
