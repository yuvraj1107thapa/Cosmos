import React from "react";
import { useContext } from "react";
import { AsideDataContext } from "../../contexts/AsideDataContext";
import { DataContext } from "../../contexts/DataContext";
import UserList from "../UserList/UserList";

const UserModal = ({ open }) => {
  const { userModal } = useContext(AsideDataContext);
  const { state } = useContext(DataContext);
  console.log(userModal, "modal");

  return (
    <div>
      <div className="modalContainer">
        <div className="modal">
          <div className="cancelBtn">
            <h3>User list</h3>
            <button
              id="btnCancel"
              onClick={() => open({ ...userModal, show: false })}
            >
              {" "}
              X{" "}
            </button>
          </div>
          {userModal.type === 0 &&
            (userModal.show && userModal?.userData?.following?.length !== 0 ? (
              userModal?.userData?.following?.map((user) => (
                <div
                  className="modal-userlist"
                  onClick={() => open({ ...userModal, show: false })}
                >
                  <UserList user={user} />
                </div>
              ))
            ) : (
              <p>You don't follow anyone</p>
            ))}
          {userModal.type === 1 &&
            (userModal.show && userModal?.userData?.followers?.length !== 0 ? (
              userModal?.userData?.followers?.map((user) => (
                <div
                  className="modal-userlist"
                  onClick={() => open({ ...userModal, show: false })}
                >
                  <UserList user={user} />
                </div>
              ))
            ) : (
              <p>You don't have any follower yet!</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserModal;
