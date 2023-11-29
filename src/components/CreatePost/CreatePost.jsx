import React from "react";
import "./CreatePost.css";
import ImageIcon from "@mui/icons-material/Image";
import { DataContext } from "../../contexts/DataContext";
import { useContext } from "react";
import { useState } from "react";
import { AsideDataContext } from "../../contexts/AsideDataContext";

const CreatePost = () => {
  const {
    userLoginData,
    createPostHandler,
    dispatch,
    createPost,
    setCreatePost,
    postType,
  } = useContext(DataContext);

  const { editPost, setEditPost, addComment } = useContext(AsideDataContext);
  const [image, setImage] = useState("");
  const [video, setvideo] = useState("");

  // const uploadImage = async (event) => {
  //   console.log("hello");
  //   const formData = new FormData();
  //   formData.append("files", event.target.files[0]);
  //   formData.append("upload_preset", "dltykvje");

  //   const response = await axios.post(
  //     "https://api.cloudinary.com/v1_1/dgoldjr3g/image/upload",
  //     formData
  //   );
  //   console.log(response);
  // };

  const uploadImage = (event) => {
    const mediaUrl = URL.createObjectURL(event.target.files[0]);
    if (event.target.files[0].type === "video/mp4") {
      setvideo(mediaUrl);
      postType.current = "video";
      console.log("first");
    } else {
      setImage(mediaUrl);
    }
  };

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
          <span className="image-span">
            {image && <img src={image} alt="postImg" id="image-post" />}
            {video && (
              <video width="320" height="240" controls>
                <source src={video} alt="media/mp4"></source>
              </video>
            )}
          </span>
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
              accept="image/png, image/jpeg, video/*"
              onChange={(event) => {
                setCreatePost({
                  ...createPost,
                  media: URL.createObjectURL(event.target.files[0]),
                });
                uploadImage(event);
              }}
            />
            {/* <span className={createPost.media && "media-loaded"}></span> */}
          </label>

          <button
            className="post-btn cta-btn"
            onClick={() => {
              createPostHandler(createPost);
              setEditPost(false);
              setCreatePost({ text: "", media: "" });
              dispatch({ type: "CLEAR_FILTER" });
              setImage("");
              setvideo("");
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
