import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "../../contexts/DataContext";
import PostCard from "../../components/PostCard/PostCard";
import Navbar from "../../components/Navbar/Navbar";
import "./Bookmark.css";
import UserList from "../../components/UserList/UserList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { AuthContext } from "../../contexts/AuthContext";
import { AsideDataContext } from "../../contexts/AsideDataContext";

const Bookmark = () => {
  const [bookmarkData, setBookmarkData] = useState([]);
  const { encodedToken,state } = useContext(DataContext);
  const { scrollToTop } = useContext(AsideDataContext);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/users/bookmark", {
          headers: {
            authorization: encodedToken,
          },
        });
        setBookmarkData(data.bookmarks);
        console.log("book", data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [state.bookmarkedPosts]);

  useEffect(() => {
    scrollToTop();
  }, []);
  
  return (
    <div className="bookmark-main">
      {/* <div className="bookmark-nav">
        <Navbar />
      </div> */}
      <div className="bookmark-post">
        {!state.bookmarkedPosts.length && <h1>No Bookmarks yet!</h1>}
        {state?.posts?.map((data) =>
          bookmarkData.includes(data._id) ? <PostCard data={data} /> : <></>
        )}
      </div>
      {/* <div>
        <div className="side-search-bar">
          <SearchBar />
          <div className="user-container">
            <h2>You might Like</h2>
                  {state?.userToFollow.map((user) => (
              <UserList user={user} />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Bookmark;
