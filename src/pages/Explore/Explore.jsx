import React from "react";
import PostCard from "../../components/PostCard/PostCard";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserList from "../../components/UserList/UserList";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const Explore = () => {
  const { state } = useContext(DataContext);

  return (
    <div className="landing-container">
      <div>
        <Navbar />
      </div>
      <div>
        {/* <PostCard /> */}
        {state?.posts?.map((data) => (
          <PostCard data={data} />
        ))}
      </div>
      <div>
        <div className="side-search-bar">
          <SearchBar />
          <div className="user-container">
            <h2>You might Like</h2>
            {/* <UserList />
          <UserList /> */}

            {state?.users?.map((user) => (
              <UserList user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;