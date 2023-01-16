import "../CSS/BackStyle.css";
import { useState } from "react";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsTelegram,
  BsLockFill,
} from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
function SignUpForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordErrorA, setPasswordErrorA] = useState("");
  const emailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "" || name.length < 2) {
      setUsernameError("Username is Required");
    } else {
      setUsernameError("");
    }
    if (!email.match(emailformat)) {
      setEmailError("Enter a valid Email");
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
    if (passwordAgain === "") {
      setPasswordErrorA("Please confirm your password");
    } else if (password !== passwordAgain) {
      setPasswordErrorA("Password doesn't match");
    } else {
      setPasswordErrorA("");
    }
  };
  function signin() {
    props.sendData();
  }
  return (
    <div className="signup">
      <h1>Create Account</h1>
      <div className="signup-links">
        <BsFacebook />
        <BsTwitter />
        <BsLinkedin />
        <BsTelegram />
      </div>
      <div className="form-container">
        <form>
          <div>
            <label className="form-label">Username</label>
            <FaUserAlt className="icons" />
            <input
              type="text"
              className="form-input"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div id="valid">{usernameError}</div>
          </div>
          <div>
            <label className="form-label">Email</label>
            <GrMail className="icons" />
            <input
              type="text"
              className="form-input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div id="valid">{emailError}</div>
          </div>
          <div>
            <label className="form-label">Password</label>
            <BsLockFill className="icons" />
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div id="valid">{passwordError}</div>
          </div>
          <div>
            <label className="form-label">Password again</label>
            <BsLockFill className="icons" />
            <input
              type="password"
              className="form-input"
              value={passwordAgain}
              onChange={(e) => {
                setPasswordAgain(e.target.value);
              }}
            />
            <div id="valid">{passwordErrorA}</div>
          </div>
          <input
            type="submit"
            value="Sign Up"
            className="submit-btn"
            onClick={handleSubmit}
          />
          <button onClick={signin} className="flip">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
