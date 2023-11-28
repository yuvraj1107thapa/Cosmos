import React from "react";
import "./SignUp.css";
import "../Home/Home.css"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";


const SignUp = () => {
    const [showPassword,setShowPassword ] = useState(false)
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
          <div className="signup-input">
            <label>First Name:</label>
            <input type="text" />
            <label>Last Name:</label>
            <input type="text" />
            <label>Password:</label>
            <div className="pass-label"><input type={showPassword ? "text" :"password"} /> <div className="signup-icon" onClick={()=>setShowPassword(!showPassword)}>
{showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div></div>

            <button className="signup-btn">Sign Up</button>
            <div className="signup-nav">Already have an account? <a href="/"> login here</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;