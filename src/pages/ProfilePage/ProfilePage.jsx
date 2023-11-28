import React from "react";
import Profile from "../../components/Profile/Profile";
import PostCard from "../../components/PostCard/PostCard";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import "./ProfilePage.css";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  //   const { userLoggedIn } = useContext(AuthContext);
  const { userLoginData } = useContext(DataContext);
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
        // console.log(response.data.users);
        // getUserLoggedInData();
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
  return (
    <div className="landing-container">
      <div className="profile-page-content">
        <div>
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
