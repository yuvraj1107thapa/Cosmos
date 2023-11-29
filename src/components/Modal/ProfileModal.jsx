import React from "react";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { useState } from "react";
import axios from "axios";
import toastNotify from "../../utils/toastNotify";
import { AsideDataContext } from "../../contexts/AsideDataContext";

const ProfileModal = ({ open }) => {
  const {
    userLoginData,
    encodedToken,
    setUserLoginData,
    state,
    dispatch,
    userLoggedIn,
  } = useContext(DataContext);
  const [updateUserData, setUpdateUserData] = useState({
    image: "",
    text: userLoginData?.bio,
    link: userLoginData?.website,
  });

  const { setEditProfile } = useContext(AsideDataContext);

  const getImage = (src) => {
    console.log("modal", src);
    setUpdateUserData({ ...updateUserData, image: src });
  };

  const updateProfile = async () => {
    if (updateUserData.image) {
      try {
        const response = await axios.post(
          "/api/users/edit",
          {
            userData: {
              avatarUrl: updateUserData.image,
              bio: updateUserData.text,
              website: updateUserData.link,
            },
          },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );

        setUserLoginData(response.data.user);

        const finduser = state?.users?.map((ele) =>
          ele.username === userLoggedIn ? response.data.user : ele
        );
        dispatch({ type: "GET_USERS", payload: finduser });
        setEditProfile(false);
        toastNotify("success", "Profile updated successfully!");
      } catch (e) {
        console.log(e);
      }
    } else {
      toastNotify("error", "Please select avatar to update!");
    }
  };
  return (
    <div>
      <div className="modalContainer">
        <div className="modal">
          <div className="cancelBtn">
            <h3>Edit Profile</h3>
            <button id="btnCancel" onClick={() => open(false)}>
              {" "}
              X{" "}
            </button>
          </div>
          <div className="edit-profile-container">
            <h3>Select Avatar</h3>
            <div className="edit-image-list">
              <img
                value="https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433601/NegProjects/SocialMedia/girl_pbevto.png"
                className="edit-image"
                src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433601/NegProjects/SocialMedia/girl_pbevto.png"
                alt=""
                onClick={() =>
                  getImage(
                    "https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433601/NegProjects/SocialMedia/girl_pbevto.png"
                  )
                }
              />
              <div className="edit-image-list">
                <img
                  className="edit-image"
                  src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433602/NegProjects/SocialMedia/man_1_zw6rvf.png"
                  alt=""
                  onClick={() =>
                    getImage(
                      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433602/NegProjects/SocialMedia/man_1_zw6rvf.png"
                    )
                  }
                />
              </div>
              <div className="edit-image-list">
                <img
                  className="edit-image"
                  src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433602/NegProjects/SocialMedia/woman_2_maqivp.png"
                  alt=""
                />

                {() =>
                  getImage(
                    "https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433602/NegProjects/SocialMedia/woman_2_maqivp.png"
                  )
                }
              </div>

              <div className="edit-image-list">
                <img
                  className="edit-image"
                  src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433601/NegProjects/SocialMedia/user_ow1rgu.png"
                  alt=""
                  onClick={() =>
                    getImage(
                      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433601/NegProjects/SocialMedia/user_ow1rgu.png"
                    )
                  }
                />
              </div>

              <div className="edit-image-list">
                <img
                  className="edit-image"
                  src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433602/NegProjects/SocialMedia/woman_1_mo7ys3.png"
                  alt=""
                  onClick={() =>
                    getImage(
                      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433602/NegProjects/SocialMedia/woman_1_mo7ys3.png"
                    )
                  }
                />
              </div>
              <div className="edit-image-list">
                <img
                  className="edit-image"
                  src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433602/NegProjects/SocialMedia/woman_dcfbz8.png"
                  alt=""
                  onClick={() =>
                    getImage(
                      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433602/NegProjects/SocialMedia/woman_dcfbz8.png"
                    )
                  }
                />
              </div>
              <div className="edit-image-list">
                <img
                  className="edit-image"
                  src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433602/NegProjects/SocialMedia/man_oppxey.png"
                  alt=""
                  onClick={() =>
                    getImage(
                      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433602/NegProjects/SocialMedia/man_oppxey.png"
                    )
                  }
                />
              </div>
            </div>
            <label>
              Name:{" "}
              <b>
                {userLoginData?.firstname} {userLoginData?.lastname}
              </b>
            </label>
            <label>
              {" "}
              Username: <b>{userLoginData?.username}</b>
            </label>
            <label>
              Bio:{" "}
              <input
                type="text"
                value={updateUserData?.text}
                onChange={(e) =>
                  setUpdateUserData({ ...updateUserData, text: e.target.value })
                }
              />
            </label>
            <label>
              Website:{" "}
              <input
                type="text"
                value={updateUserData?.link}
                onChange={(e) =>
                  setUpdateUserData({ ...updateUserData, link: e.target.value })
                }
              />
            </label>
            <div className="update-btn">
              <button
                className="btn-primary cta-btn post-btn"
                onClick={updateProfile}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
