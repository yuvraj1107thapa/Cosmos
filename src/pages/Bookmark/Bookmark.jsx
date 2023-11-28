import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "../../contexts/DataContext";
import PostCard from "../../components/PostCard/PostCard";
import Navbar from "../../components/Navbar/Navbar";
import "./Bookmark.css";
import UserList from "../../components/UserList/UserList";
import SearchBar from "../../components/SearchBar/SearchBar";

const Bookmark = () => {
  const [bookmarkData, setBookmarkData] = useState([]);
  const { state } = useContext(DataContext);

  useEffect(() => {
    (async () => {
      try {
        // const response = await axios.get(
        //   "/api/users/bookmark",
        //   {},
        //   {
        //     headers: {
        //       authorization: localStorage.getItem("token"),
        //     },
        //   }
        // );

        const response = await fetch("/api/users/bookmark", {
          method: "GET",
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        setBookmarkData(data.bookmarks);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [state.bookmarkedPosts]);

  return (
    <div className="bookmark-main">
      <div className="bookmark-nav">
        <Navbar />
      </div>
      <div className="bookmark-post">
        {!state.bookmarkedPosts.length && <h1>No Bookmarks yet!</h1>}
        {state?.posts?.map((data) =>
          bookmarkData.includes(data._id) ? <PostCard data={data} /> : <></>
        )}
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

export default Bookmark;
