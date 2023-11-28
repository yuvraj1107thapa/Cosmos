import React from "react";
import PostCard from "../../components/PostCard/PostCard";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserList from "../../components/UserList/UserList";

const Explore = () => {
  return (
    <div className="landing-container">
      <div>
        <Navbar />
      </div>
      <div>
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div>
      <div>
        <SearchBar />
        <div className='user-container'>
        <h2>You might Like</h2>
          <UserList />
          <UserList />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Explore;