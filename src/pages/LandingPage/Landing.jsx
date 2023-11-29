import React, { useContext, useEffect } from "react";
import "./Landing.css";
import CreatePost from "../../components/CreatePost/CreatePost";
import PostCard from "../../components/PostCard/PostCard";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { DataContext } from "../../contexts/DataContext";
import { AsideDataContext } from "../../contexts/AsideDataContext";


const Landing = () => {
  const { state, dispatch, setFilter, userLoggedIn } = useContext(DataContext);
  const { scrollToTop } = useContext(AsideDataContext);

  const landingPost = state?.posts?.filter(
    ({ username }) =>
      username === userLoggedIn ||
      state?.following?.find((user) => user.username === username)
  );

  const data = state?.filter
    ? [...landingPost].sort((a, b) =>
        state.filter === "latest"
          ? new Date(b.createdAt) - new Date(a.createdAt)
          : b.likes.likeCount - a.likes.likeCount
      )
    : [...landingPost];

  // console.log(data);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get(`/api/posts/user/${userLoggedIn}`);
  // setUserPostData(response.data.posts);
  //       // dispatch({ type: "GET_USERS", payload: response.data.users });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    dispatch({ type: "USER_TO_FOLLOW" });
  }, []);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="landing-container">
      {/* <Navbar /> */}

      {/* filter section in landing page */}
      <div className="feed">
        {/* <Header /> */}
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
        {data.length === 0 && (
          <p className="new-user-post">You have't posted anything yet!</p>
        )}
      </div>
    </div>
  );
};

export default Landing;
