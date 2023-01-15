import "./App.css";
import SignInForm from "./Components/SignInForm";
import SignUpForm from "./Components/SignUpForm";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./CSS/FrontStyle.css";
import "./CSS/BackStyle.css";
function App() {
  const [flip, setFlip] = useState(false);
  const sendData = () => {
    setFlip(!flip);
  };
  return (
    <div className="App">
      <ReactCardFlip
        className="container"
        isFlipped={flip}
        flipDirection="horizontal"
      >
        <div className="front-container">
          <SignInForm sendData={sendData} />
          <div className="create-account">
            <h1>Get Free Education</h1>
            <button id="signup-btn" onClick={() => setFlip(!flip)}>
              sign up
            </button>
          </div>
        </div>
        <div className="back-container">
          <div className="welcome-back">
            <h1>Welcome Back</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button id="signin-btn" onClick={() => setFlip(!flip)}>
              sign in
            </button>
          </div>
          <SignUpForm sendData={sendData} />
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default App;
