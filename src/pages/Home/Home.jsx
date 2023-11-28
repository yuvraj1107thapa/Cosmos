import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginInput, setLoginInput, loginHandler } = useContext(AuthContext);
  const { setEncodedToken } = useContext(DataContext);

  const creds = { username: "bhumika27", password: "bhumi27" };

  useEffect(() => {
    setLoginInput({ username: "", password: "" });
  }, []);

  useEffect(() => {
    localStorage.clear();
    setEncodedToken("");
  }, []);

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
            <h1>
              <span className="text-primary">Share</span>
              <span className="text-secondary-dark">M</span>
              <span className="text-primary">ate</span>
            </h1>
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
              <button className="btn-primary" onClick={() => loginHandler(loginInput)}>Login</button>

              <button id="btn-default" className="btn-default"
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