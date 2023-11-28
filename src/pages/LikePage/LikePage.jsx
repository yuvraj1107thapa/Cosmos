import React from "react";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import Navbar from "../../components/Navbar/Navbar";
import PostCard from "../../components/PostCard/PostCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserList from "../../components/UserList/UserList";
import { useEffect } from "react";
import axios from "axios";

const LikePage = () => {
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
    dispatch({ type: "USER_TO_FOLLOW" });
  }, []);


  return (
    <div className="bookmark-main">
      <div className="bookmark-nav">
        <Navbar />
      </div>
      <div className="bookmark-post">
        {!state.likedPosts.length && <h1>No Liked Posts yet!</h1>}
        {state?.posts?.map((data) =>
          state.likedPosts.includes(data._id) ? <PostCard data={data} /> : <></>
        )}
      </div>
      <div>
        <div className="side-search-bar">
          <SearchBar />
          <div className="user-container">
            <h2>You might Like</h2>
            {/* <UserList />
        <UserList /> */}

            {state?.userToFollow?.map((user) => (
              <UserList user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikePage;
