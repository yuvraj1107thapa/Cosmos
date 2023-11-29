import React from "react";
import "./UserList.css";
import { AsideDataContext } from "../../contexts/AsideDataContext";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { NavLink } from "react-router-dom";

const UserList = ({ user }) => {
  const { followUser, userModal } = useContext(AsideDataContext);
  const { state, userLoginData } = useContext(DataContext);

  // const findFollower = state?.userLoginData.find(({following})=>following.find(({_id})=>_id === user._id))
  return (
    <div>
      <div>
        <div className="userlist">
          <img src={user.avatarUrl} alt="" className="nav-profile-pic" />
          <NavLink
            className="user-detail not-a-link"
            to={`/profilepage/${user.username}`}
          >
            {" "}
            <div>
              <div className="post-user-details">
                {user.firstname} {user.lastname}
              </div>
              <span>@{user.username}</span>
            </div>
          </NavLink>
          {state?.following.find((ele) => ele.username === user.username) ||
          user.username === localStorage.getItem("loggedUser") ? (
            <></>
          ) : (
            <button className="follow-btn" onClick={() => followUser(user._id)}>
              + Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
