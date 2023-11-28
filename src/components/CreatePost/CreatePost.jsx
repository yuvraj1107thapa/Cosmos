import React from "react";
import "./CreatePost.css";
import ImageIcon from "@mui/icons-material/Image";

const CreatePost = () => {
  return (
    <div>
      <div className="new-post-container">
        <div className="new-post-input">
          <img
            src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1685259140/NegProjects/E-commerce/logo1_pskkes.jpg"
            alt=""
            className="nav-profile-pic"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="What's happening!"
          ></textarea>
        </div>
        <hr />
        <div className="new-post-media">
          <label for="image">
            <ImageIcon />
            <input
              type="file"
              id="image"
              style={{ visibility: "hidden" }}
              name="avatar"
              accept="image/png, image/jpeg video/*"
            />
          </label>
          <button className="follow-btn post-btn">Post</button>
        </div>
        {/* <div className="image-added">hel</div> */}
      </div>
    </div>
  );
};

export default CreatePost;