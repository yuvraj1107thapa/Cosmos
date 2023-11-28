import React, { useContext, useState } from "react";
import "./Home.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginInput, setLoginInput, loginHandler, loginasGuest } =
    useContext(AuthContext);

    const creds = { username: "yuvrajthapa", password: "yuvraj123" }
  return (
    <div className="home-main">
      <div className="home-container">
        <img
          id="login-img"
          src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1686586617/NegProjects/SocialMedia/undraw_social_sharing_re_pvmr_srlnml.svg"
          alt=""
        />

        <div className="login">
          <div className="login-container">
            <h1>Cosmos</h1>
            <div className="login-form">
              <label>username:</label>
              <input
                type="text"
                value={loginInput.username}
                placeholder="Enter username"
                onChange={(e) =>
                  setLoginInput({ ...loginInput, username: e.target.value })
                }
              />
              <div className="password-container">
                <label htmlFor="">password:</label>
                <div className="input-pass-div">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={loginInput.password}
                    placeholder="Enter password"
                    onChange={(e) =>
                      setLoginInput({ ...loginInput, password: e.target.value })
                    }
                    className="input-password"
                  />{" "}
                  <span
                    id="password-eye"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </span>
                </div>
              </div>
              {/* <div className="login-buttons"> */}
              <button onClick={()=>loginHandler(loginInput)}>Login</button>

              <button
                onClick={() => {
                  setLoginInput(creds);
                  loginHandler(creds);
                }}
              >
                {" "}
                Login as Guest
              </button>

              {/* </div> */}
              <div className="signup-nav">
                Don't have an account?{" "}
                <NavLink to="/signup">Sign up here</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;