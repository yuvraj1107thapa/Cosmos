import React, { useContext, useEffect } from "react";
import "./Landing.css";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import CreatePost from "../../components/CreatePost/CreatePost";
import PostCard from "../../components/PostCard/PostCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserList from "../../components/UserList/UserList";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { DataContext } from "../../contexts/DataContext";

const Landing = () => {
  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/posts");
        console.log(response);
        dispatch({ type: "GET_POSTS", payload: response.data.posts });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/users");
        dispatch({type:"GET_USERS",payload:response.data.users})
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

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
              <div className="filter-content">
                <WhatshotIcon />
                <p>Trending</p>
              </div>
            </div>
          </div>
          <CreatePost />
        </div>
        {/* <PostCard /> */}
        {state?.posts?.map((data) => (
          <div key={data._id}>
            {" "}
            <PostCard data={data} />
          </div>
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

export default Landing;
