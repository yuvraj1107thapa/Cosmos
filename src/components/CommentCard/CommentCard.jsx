import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import axios from "axios";

const CommentCard = ({ data }) => {
  const { state, likePost, bookMarkPost, userLoggedIn, postType } =
    useContext(DataContext);
  const [userData, setUserData] = useState([]); //to show the user details in individual post in landing page

  console.log("comment", { data });
  //get user profile pic
  const picOfUser = state?.users?.find(
    (user) => user.username === data.username
  );
  useEffect(() => {
    const user = state?.users?.find((usr) => usr.username === data.username);
    (async () => {
      try {
        const response = await axios.get(`/api/users/${user._id}`);
        setUserData(response.data.user);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [state.users]);

  return (
    <div>
      <div className="post-container">
        <div className="post-heading">
          <NavLink className="not-a-link" to={`/profilepage/${data?.username}`}>
            {" "}
            <div className="post-title">
              <img
                src={picOfUser?.avatarUrl}
                alt=""
                className="nav-profile-pic"
              />

              <div className="post-date">
                <p>
                  <span className="post-user-details">
                    {userData?.firstname} {userData?.lastname}
                  </span>{" "}
                </p>
                <p>@{data?.username}</p>
              </div>
            </div>
          </NavLink>
        </div>
        <div>{data}</div>
      </div>
    </div>
  );
};

export default CommentCard;