import React from "react";
import Profile from "../../components/Profile/Profile";
import PostCard from "../../components/PostCard/PostCard";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { AuthContext } from "../../contexts/AuthContext";
import "./ProfilePage.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const ProfilePage = () => {
  //   const { userLoggedIn } = useContext(AuthContext);
  const { userLoginData } = useContext(DataContext);

  const { userPost, setUserPost, state } = useContext(DataContext);

  useEffect(() => {
    (async () => {
      console.log(state.userLoggedIn);
      try {
        const response = await axios.get(
          `/api/posts/user/${state.userLoggedIn}`
        );
        setUserPost(response.data.posts);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div className="landing-container">
      <Navbar />
      <div className="profile-page-content">
        <div>
          <Profile user={userLoginData} />
        </div>
        <div>
          {[...userPost]
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            ?.map((data) => (
              <PostCard data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;