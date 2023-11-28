import React from "react";
import "./Landing.css";
import Navbar from "../../components/Navbar/Navbar";
import CreatePost from "../../components/CreatePost/CreatePost";
import PostCard from "../../components/PostCard/PostCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserList from "../../components/UserList/UserList";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const Landing = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <div className="feed">
        <div className="filter-container">
        <div className="filter-post">
          <div className="filter">
           <div className="filter-content">
           <FiberNewIcon />
           <p>Latest</p> 
            </div> 
          </div>
          <div className="filter">
            {" "}
            <div className="filter-content"><WhatshotIcon />
            <p>Trending</p></div>
          </div>

        </div>
        <CreatePost />
        </div>
        <PostCard />
      </div>

      <div>
        <SearchBar />
        <div className='user-container'>
        <h2>You might Like</h2>
          <UserList />
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default Landing;