import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "../../contexts/DataContext";
import PostCard from "../../components/PostCard/PostCard";

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
  }, []);

  return (
    <div>
      {state?.posts?.map((data) =>
        bookmarkData.includes(data._id) ? <PostCard data={data} /> : <></>
      )}
    </div>
  );
};

export default Bookmark;