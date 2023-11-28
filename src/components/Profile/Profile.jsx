import React from "react";
import "./Profile.css";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { AsideDataContext } from "../../contexts/AsideDataContext";

const Profile = ({ user }) => {
  const { state } = useContext(DataContext);
  const { followUser, unfollowUser } = useContext(AsideDataContext);

  const userFollow = state?.userToFollow?.find(
    ({ username }) => username === user.username
  );

  const userFollowing = state?.following?.find(
    ({ username }) => username === user.username
  );

  const btnText = () => {
    if (userFollow) {
      return "Follow";
    } else if (userFollowing) {
      return "Following";
    } else {
      return "Edit Profile";
    }
  };
  const clickHandler = (event) => {
    if (event.target.innerText === "Follow") {
      followUser(user._id);
      console.log(state);
    } else if (event.target.innerText === "Following") {
      unfollowUser(user._id);
    } else {
      console.log("Edit Profile");
    }
  };
  return (
    <div className="profile-main">
      <div className="profile-container">
        <img className="profile-image" src={user?.avatarUrl} alt="" />
        <div className="username">
          {user?.firstName}
          {user?.lastName}
        </div>
        <span className="user-id">@{user?.username}</span>
        <button className="profile-edit-btn" onClick={clickHandler}>
          {btnText()}
        </button>

        <div className="profile-bio">{user?.bio}</div>
        <div>
          <a href="/">{user?.website}</a>
        </div>

        <div className="follow-details">
          <div> {user?.followers?.length} Follower</div>
          <div>
            {" "}
            {
              state?.posts?.filter((post) => post?.username === user?.username)
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
