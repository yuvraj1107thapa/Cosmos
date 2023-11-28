import React from "react";
import "./Home.css";
import UserList from "../../components/UserList/UserList";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <div className="home-filter">
        <p className="filter-name">Latest</p>
        <p className="filter-name">Trending</p>
      </div>
      <UserList />
    </div>
  );
};

export default Home;