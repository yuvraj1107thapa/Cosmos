import React from "react";
import PostCard from "../../components/PostCard/PostCard";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserList from "../../components/UserList/UserList";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { AsideDataContext } from "../../contexts/AsideDataContext";

const Explore = () => {
  const { state, dispatch } = useContext(DataContext);
  const { scrollToTop } = useContext(AsideDataContext);
  const [feedData, setFeedData] = useState([]);
  const [page, setPage] = useState(1);
  const [feedLoading, setFeedLoading] = useState(false);

  useEffect(() => {
    dispatch({ type: "USER_TO_FOLLOW" });
  }, []);

  useEffect(() => {
    scrollToTop();
  }, []);

  // const posts = [...(state?.posts)].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  // console.log("sorted",posts)

  // const posts = state.posts;
  // console.log("dekho",
  //   [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  // );

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get("/api/posts", {
  //         params: {
  //           limit: 3,
  //         },
  //       });
  //       console.log(response);
  //       setFeedData(response.data.posts);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();
  // }, []);
  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setFeedLoading(true);
    const data = state?.posts.slice(0);
    setFeedData(data);
    setFeedLoading(false);
  }, [page, state.posts]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
  }, []);

  // console.log("feed", feedData);

  return (
    <div className="landing-container explore">
      <div>
        {[...feedData]?.map((data) => (
          <div key={data._id}>
            <PostCard data={data} />
          </div>
        ))}
        {/* {feedLoading && (
          <div className="feedLoader">
            <ColorRing
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        )} */}

        <div className="feedLoader">
          <ColorRing
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      </div>
      {/* <div>
        <div className="side-search-bar">
          <SearchBar />
          <div className="user-container">
            <h2>You might Like</h2>
            {state?.userToFollow?.map((user) => (
              <UserList user={user} />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Explore;
