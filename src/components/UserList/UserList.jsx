import React from "react";
import "./UserList.css";

const UserList = ({ user }) => {
  console.log(user);
  return (
    <div>
      <div>
        <div className="userlist">
          <img src={user.avatarUrl} alt="" className="nav-profile-pic" />
          <div className="user-detail">
            <h4>
              {user.firstName} {user.lastName}
            </h4>
            <span>@{user.username}</span>
          </div>
          <button className="follow-btn">+ Follow</button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
