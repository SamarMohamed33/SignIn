import "../CSS/BackStyle.css";
import "../CSS/FrontStyle.css";
import { useState } from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsTelegram } from "react-icons/bs";

import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
function SignUpForm(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [error, setError] = useState(false);
  const emailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const handleSubmit = (event) => {
    if (
      name === "" ||
      name.length < 3 ||
      email === "" ||
      password === "" ||
      passwordAgain === "" ||
      password !== passwordAgain ||
      !email.match(emailformat)
    ) {
      event.preventDefault();
      setError(true);
    } else {
      setError(!error);
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
          <TextField
            error={(name === "" || name.length < 3) & error}
            className="inputs"
            label="Username"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            variant="filled"
          />
          <TextField
            error={(email === "" || !email.match(emailformat)) & error}
            className="inputs"
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            variant="filled"
          />
          <FormControl
            variant="filled"
            className="inputs"
            error={(password === "") & error}
          >
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            variant="filled"
            className="inputs"
            error={(passwordAgain === "" || passwordAgain !== password) & error}
          >
            <InputLabel htmlFor="filled-adornment-password">
              Password again
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              value={passwordAgain}
              onChange={(e) => {
                setPasswordAgain(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <input
            type="submit"
            value="Sign Up"
            className="submit-btn inputs"
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
