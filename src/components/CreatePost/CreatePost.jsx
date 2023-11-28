import React from "react";
import "./CreatePost.css";
import ImageIcon from "@mui/icons-material/Image";
import { DataContext } from "../../contexts/DataContext";
import { useContext } from "react";
import { useState } from "react";
import toastNotify from "../../utils/toastNotify";
import { AsideDataContext } from "../../contexts/AsideDataContext";
import { useEffect } from "react";

const CreatePost = () => {
  const {
    userLoginData,
    createPostHandler,
    dispatch,
    createPost,
    setCreatePost,
  } = useContext(DataContext);

  const { editPost, setEditPost } = useContext(AsideDataContext);
  
  return (
    <div>
      <div className="new-post-container">
        <div className="new-post-input">
          <img
            src={userLoginData?.avatarUrl}
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
              style={{ visibility: "hidden" }}
              name="avatar"
              accept="image/png, image/jpeg video/*"
              onChange={(event) =>
                setCreatePost({
                  ...createPost,
                  media: URL.createObjectURL(event.target.files[0]),
                })
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
              setEditPost(false);
              setCreatePost({ text: "", media: "" });
              dispatch({ type: "CLEAR_FILTER" });
            }}
          >
            {editPost ? "Update" : "Post"}
          </button>
        </div>
        {/* <div className="image-added">hel</div> */}
      </div>
    </div>
  );
};

export default CreatePost;