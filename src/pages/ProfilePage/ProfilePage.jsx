import React from "react";
import Profile from "../../components/Profile/Profile";
import PostCard from "../../components/PostCard/PostCard";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import "./ProfilePage.css";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AsideDataContext } from "../../contexts/AsideDataContext";

const ProfilePage = () => {
  const { scrollToTop } = useContext(AsideDataContext);
  const { setUserPost, state, dispatch } = useContext(DataContext);
  const { username } = useParams();

  const userId = state?.users.find(
    ({ username }) => username.toString() === username
  );

  useEffect(() => {
    (async () => {
      // console.log(userLoggedIn);
      try {
        const response = await axios.get(`/api/posts/user/${username}`);
        setUserPost(response.data.posts);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/users");
        dispatch({ type: "GET_USERS", payload: response.data.users });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  //to get all the posts of specified user
  const postOfUser = state?.posts?.filter(
    (post) => post.username.toString() === username
  );

  //to get the user detail of specified user
  const userDetail = state?.users?.find(
    (user) => user.username.toString() === username
  );

  //set the scroll bar to top whenever the page loads
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="landing-container">
      <div className="profile-page-content">
        <div className="profile-card">
          <Profile user={userDetail} />
        </div>
        <div>
          {[...postOfUser]
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            ?.map((data) => (
              <div key={data._id}>
                <PostCard data={data} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
