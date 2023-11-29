import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "../../contexts/DataContext";
import PostCard from "../../components/PostCard/PostCard";
import "./Bookmark.css";
import { AsideDataContext } from "../../contexts/AsideDataContext";

const Bookmark = () => {
  const [bookmarkData, setBookmarkData] = useState([]);
  const { encodedToken, state } = useContext(DataContext);
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
      <div className="bookmark-post">
        {!state.bookmarkedPosts.length && <h1>No Bookmarks yet!</h1>}
        {state?.posts?.map((data) =>
          bookmarkData.includes(data._id) ? (
            <div key={data._id}>
              <PostCard data={data} />{" "}
            </div>
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
};

export default Bookmark;
