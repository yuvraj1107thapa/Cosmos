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
import { AsideDataContext } from "../../contexts/AsideDataContext";

const Landing = () => {
  const { state, dispatch, getUserLoggedInData, setFilter } =
    useContext(DataContext);

  const landingPost = state?.posts?.filter(
      ({ username }) =>
        username === state.userLoggedIn ||
        state?.following?.find((user) => user.username === username)
    );

  // const { editPost, setEditPost } = useContext(AsideDataContext);
  const data = state.filter
    ? [...landingPost].sort((a, b) =>
        state.filter === "latest"
          ? new Date(b.createdAt) - new Date(a.createdAt)
          : b.likes.likeCount - a.likes.likeCount
      )
    : [...landingPost];

  // console.log(data);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/posts");
        // console.log(response);
        dispatch({ type: "GET_POSTS", payload: response.data.posts });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get("/api/users");
  //       dispatch({type:"GET_USERS",payload:response.data.users})
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    getUserLoggedInData();
  }, []);

  useEffect(() => {
    dispatch({ type: "USER_TO_FOLLOW" });
  }, []);

  //all posts of user and following

  

  console.log("landingPost", landingPost);
  return (
    <div className="landing-container">
      <Navbar />
      {/* filter section in landing page */}
      <div className="feed">
        <div className="filter-container">
          <div className="filter-post">
            <div className="filter">
              <div
                className="filter-content"
                onClick={() => setFilter("latest")}
              >
                <FiberNewIcon />
                <p>Latest</p>
              </div>
            </div>
            <div className="filter">
              {" "}
              <div
                className="filter-content"
                onClick={() => setFilter("trending")}
              >
                <WhatshotIcon />
                <p>Trending</p>
              </div>
            </div>
          </div>
          {/* user to create post */}
          <CreatePost />
        </div>
        {/* Display all the posts of user logged in and whom user is following*/}
        {state.filter
          ? data?.map((data) => (
              <div key={data._id}>
                {" "}
                <PostCard data={data} />
              </div>
            ))
          : data.reverse()?.map((data) => (
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
            {/* Displaying suggestions to whom user can follow*/}
            {state?.userToFollow?.map((user) => (
              <UserList user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
