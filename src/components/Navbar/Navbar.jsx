import React, { useContext } from "react";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { useEffect } from "react";

const Navbar = () => {
  const { userLoginData, dispatch, setOpenModal, userLoggedIn } =
    useContext(DataContext);
  const navigate = useNavigate();

  // console.log("insideNav", localStorage.getItem("userData"));
  // useEffect(() => {
  //   setUserLoginData(JSON.parse(localStorage.getItem("userData")));
  // }, []);
  console.log("nav", userLoginData);
  return (
    <div className="nav-main">
      <div className="nav-container">
        <div className="navbar">
          <div className="nav-icons">
            <HomeIcon />
          </div>

          <div className="nav-icons">
            <ExploreIcon />
          </div>
          <div className="nav-icons">
            <ControlPointIcon />
          </div>
          <div className="nav-icons">
            <FavoriteIcon />
          </div>
          <div className="nav-icons">
            <BookmarkIcon />
          </div>
        </div>
      </div>

      {/* navbar for desktop view */}
      <div className="nav-desktop">
        <div>
          <h1>
            <span className="text-primary">Share</span>
            <span className="text-secondary-dark">M</span>
            <span className="text-primary">ate</span>
          </h1>
        </div>
        <NavLink className="not-a-link" to="/landing">
          {" "}
          <div className="nav-content">
            {" "}
            <div className="nav-icons">
              <HomeIcon />
            </div>
            Home
          </div>
        </NavLink>
        <NavLink className="not-a-link" to="/explore">
          <div className="nav-content">
            <div className="nav-icons">
              <ExploreIcon />
            </div>{" "}
            Explore
          </div>
        </NavLink>
        <NavLink className="not-a-link" to="/likepage">
          <div className="nav-content">
            {" "}
            <div className="nav-icons">
              <FavoriteIcon />
            </div>
            Liked Posts
          </div>
        </NavLink>
        <NavLink className="not-a-link" to="/bookmark">
          {" "}
          <div className="nav-content">
            <div className="nav-icons">
              <BookmarkIcon />
            </div>{" "}
            Bookmarks
          </div>
        </NavLink>
        <NavLink className="not-a-link" to={`/profilepage/${userLoggedIn}`}>
          <div className="nav-content">
            <div className="nav-icons">
              <PersonIcon />
            </div>{" "}
            Profile
          </div>
        </NavLink>
        <NavLink to=""> <div
          className="nav-content"
          onClick={() => {
            localStorage.clear();
            dispatch({ type: "RESET_ALL" });
            navigate("/");
          }}
        >
         <div className="nav-icons">
            <LogoutIcon />
          </div>{" "}
          Logout
        </div>
        </NavLink>

        <button onClick={() => setOpenModal(true)}> New Post</button>
        <NavLink
          to={`/profilepage/${userLoggedIn}`}
          className="nav-profile-container not-a-link"
        >
          <div className="nav-profile">
            <img
              src={userLoginData?.avatarUrl}
              alt=""
              className="nav-profile-pic"
            />
            <div>
              <h4>
                {userLoginData?.firstname} {userLoginData?.lastname}
              </h4>
              <span>@{userLoginData?.username}</span>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
