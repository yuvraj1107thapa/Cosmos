import React from "react";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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
          <h1>ShareMate</h1>
        </div>
        <NavLink to="/landing">
          {" "}
          <div className="nav-content">
            {" "}
            <div className="nav-icons">
              <HomeIcon />
            </div>
            Home
          </div>
        </NavLink>
        <NavLink to="/explore">
          <div className="nav-content">
            <div className="nav-icons">
              <ExploreIcon />
            </div>{" "}
            Explore
          </div>
        </NavLink>
        <div className="nav-content">
          {" "}
          <div className="nav-icons">
            <FavoriteIcon />
          </div>
          Liked Posts
        </div>
        <NavLink to="/bookmark">
          {" "}
          <div className="nav-content">
            <div className="nav-icons">
              <BookmarkIcon />
            </div>{" "}
            Bookmarks
          </div>
        </NavLink>
        <div className="nav-content">
          <div className="nav-icons">
            <PersonIcon />
          </div>{" "}
          Profile
        </div>
        <div
          className="nav-content"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          <div className="nav-icons">
            <LogoutIcon />
          </div>{" "}
          Logout
        </div>

        <button> New Post</button>

        <div className="nav-profile">
          <img
            src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1685259140/NegProjects/E-commerce/logo1_pskkes.jpg"
            alt=""
            className="nav-profile-pic"
          />
          <div>
            <h4>Bhumika Singh</h4>
            <span>@bhumikasingh</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;