import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import axios from "axios";

const CommentCard = ({ data }) => {
  const { state, likePost, bookMarkPost, userLoggedIn, postType } =
    useContext(DataContext);
  const [userData, setUserData] = useState([]); //to show the user details in individual post in landing page

  //get user profile pic
  const userInfo = state?.users?.find((user) => user.username === userLoggedIn);

  return (
    <div>
      <div className="post-container">
        <div className="post-heading">
          <NavLink className="not-a-link" to={`/profilepage/${data?.username}`}>
            {" "}
            <div className="post-title">
              <img
                src={userInfo?.avatarUrl}
                alt=""
                className="nav-profile-pic"
              />

              <div className="post-date">
                <p>
                  <span className="post-user-details">
                    {userInfo?.firstname} {userInfo?.lastname}
                  </span>{" "}
                </p>
                <p>@{userInfo?.username}</p>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="post-content">{data}</div>
      </div>
    </div>
  );
};

export default CommentCard;
