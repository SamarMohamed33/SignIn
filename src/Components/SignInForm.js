import "../CSS/FrontStyle.css";
import { useState } from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsTelegram } from "react-icons/bs";
import {
  Checkbox,
  FilledInput,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
function SignInForm(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    if (password === "" || name === "") {
      event.preventDefault();
      setError(true);
    } else {
      setError(!error);
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
          <TextField
            className="inputs"
            label="Username"
            error={(name === "") & error}
            style={{ marginBottom: "20px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <FormControlLabel
            className="inputs"
            control={<Checkbox />}
            label="Remember me"
            labelPlacement="end"
          />
          <input type="submit" value="LOG IN" className="submit-btn inputs" />
        </form>
        <hr style={{ width: "80%", marginTop: "50px" }} />
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
