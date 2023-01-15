import "../CSS/BackStyle.css";
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
            <input type="text" className="form-input" />
            <div className="error"></div>
          </div>
          <div>
            <label className="form-label">Email</label>
            <GrMail className="icons" />
            <input type="text" className="form-input" />
            <div className="error"></div>
          </div>
          <div>
            <label className="form-label">Password</label>
            <BsLockFill className="icons" />
            <input type="password" className="form-input" />
            <div className="error"></div>
          </div>
          <div>
            <label className="form-label">Password again</label>
            <BsLockFill className="icons" />
            <input type="password" className="form-input" />
            <div className="error"></div>
          </div>
          <input type="submit" value="Sign Up" className="submit-btn" />
          <button onClick={signin} className="flip">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
