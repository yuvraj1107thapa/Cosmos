import React from "react";
import "./CreatePost.css";
import ImageIcon from "@mui/icons-material/Image";
import { DataContext } from "../../contexts/DataContext";
import { useContext } from "react";
import { useState } from "react";

const CreatePost = () => {
  const { userLoginData, createPostHandler } = useContext(DataContext);
  const [createPost, setCreatePost] = useState({ text: "", media: "" });
  console.log(createPost);
  return (
    <div>
      <div className="new-post-container">
        <div className="new-post-input">
          <img
            src={userLoginData.avatarUrl}
            alt=""
            className="nav-profile-pic"
          />
          <textarea
            value={createPost.text}
            cols="30"
            rows="10"
            placeholder="What's happening!"
            onChange={(event) =>
              setCreatePost({ ...createPost, text: event.target.value })
            }
          ></textarea>
        </div>
        <hr />
        <div className="new-post-media">
          <label for="image">
            <ImageIcon />
            <input
              type="file"
              id="image"
              value={createPost.media}
              style={{ visibility: "hidden" }}
              name="avatar"
              accept="image/png, image/jpeg video/*"
              onChange={(event) =>
                setCreatePost({ ...createPost, media: event.target.value })
              }
            />
            <span className={createPost.media && "media-loaded"}>
              {createPost.media}
            </span>
          </label>

          <button
            className="follow-btn post-btn"
            onClick={() => {
              createPostHandler(createPost);
              setCreatePost({ text: "", media: "" });
            }}
          >
            Post
          </button>
        </div>
        {/* <div className="image-added">hel</div> */}
      </div>
    </div>
  );
};

export default CreatePost;
