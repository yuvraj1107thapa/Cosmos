import React from "react";
import "./UserList.css";
import { AsideDataContext } from "../../contexts/AsideDataContext";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { NavLink } from "react-router-dom";

const UserList = ({ user }) => {
  const {followUser} = useContext(AsideDataContext)
  const {state,userLoginData} = useContext(DataContext)

  // const findFollower = state?.userLoginData.find(({following})=>following.find(({_id})=>_id === user._id))
  return (
    <div>
      <div>
        <div className="userlist">
          <img src={user.avatarUrl} alt="" className="nav-profile-pic" />
         <NavLink className="user-detail" to={`/profilepage/${user.username}`}> <div  >
            <h4>
              {user.firstName} {user.lastName}
            </h4>
            <span>@{user.username}</span>
          </div></NavLink>
          <button className="follow-btn" onClick={()=>followUser(user._id)}>+ Follow</button>
        </div>
      </div>
    </div>
  );
};

export default UserList;