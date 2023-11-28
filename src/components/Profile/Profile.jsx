import React from "react";
import "./Profile.css";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const Profile = ({ user }) => {
  const { state } = useContext(DataContext);

  return (
    <div className="profile-main">
      <div className="profile-container">
        <img className="profile-image" src={user?.avatarUrl} alt="" />
        <div className="username">
          {user?.firstName}
          {user?.lastName}
        </div>
        <span className="user-id">@{user?.username}</span>
        <button className="profile-edit-btn">Edit Profile</button>

        <div className="profile-bio">{user?.bio}</div>
        <div>
          <a href="/">{user?.website}</a>
        </div>

        <div className="follow-details">
          <div> {user?.followers?.length} Follower</div>
          <div>
            {" "}
            {
              state?.posts?.filter((post) => post.username === user.username)
                .length
            }{" "}
            Post
          </div>
          <div>{user?.following?.length} Following</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;