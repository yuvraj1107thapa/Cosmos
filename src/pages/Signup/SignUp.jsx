import React, { useContext } from "react";
import "./SignUp.css";
import "../Home/Home.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signupInput, setSignupInput, signupHandler } =
    useContext(AuthContext);
  return (
    <div className="signup-main">
      <div className="signup-container">
        <div className="signup-img">
          <img
            src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1686633811/NegProjects/SocialMedia/undraw_social_life_re_x7t5_pn8g0l.svg"
            alt=""
          />
        </div>
        <div className="signup-form">
          <h1>Cosmos</h1>
          <h3>Sign Up</h3>
          <div className="signup-input">
            <label>First Name:</label>
            <input
              type="text"
              value={signupInput.firstname}
              onChange={(e) =>
                setSignupInput({ ...signupInput, firstname: e.target.value })
              }
            />
            <label>Last Name:</label>
            <input
              type="text"
              value={signupInput.lastname}
              onChange={(e) =>
                setSignupInput({ ...signupInput, lastname: e.target.value })
              }
            />
            <label>Username:</label>
            <input
              type="text"
              value={signupInput.username}
              onChange={(e) =>
                setSignupInput({ ...signupInput, username: e.target.value })
              }
            />
            <label>Password:</label>
            <div className="pass-label">
              <input
                type={showPassword ? "text" : "password"}
                value={signupInput.password}
                onChange={(e) =>
                  setSignupInput({ ...signupInput, password: e.target.value })
                }
              />{" "}
              <div
                className="signup-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>

            <button className="signup-btn" onClick={signupHandler}>
              Sign Up
            </button>
            <div className="signup-nav">
              Already have an account? <NavLink to="/"> login here</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;