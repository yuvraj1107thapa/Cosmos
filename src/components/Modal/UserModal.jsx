import React from "react";
import { useContext } from "react";
import { AsideDataContext } from "../../contexts/AsideDataContext";
import { DataContext } from "../../contexts/DataContext";
import UserList from "../UserList/UserList";

const UserModal = ({ open }) => {
  const { isFollowerModal } = useContext(AsideDataContext);
  const { state } = useContext(DataContext);
  return (
    <div>
      <div className="modalContainer">
        <div className="modal">
          <div className="cancelBtn">
            <button id="btnCancel" onClick={() => open(false)}>
              {" "}
              X{" "}
            </button>
          </div>
          {isFollowerModal ? (
            state?.userToFollow.length ? (
              state?.userToFollow.map((user) => (
                <div>
                  <UserList user={user} />
                </div>
              ))
            ) : (
              <p> No one follows you</p>
            )
          ) : state?.following ? (
            state?.following.map((user) => (
              <div>
                <UserList user={user} />
              </div>
            ))
          ) : (
            <p>You don't follow anyone</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserModal;