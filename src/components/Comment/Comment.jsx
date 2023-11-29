import React, { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import "../CreatePost/CreatePost.css";
import "./Comment.css";
import { AsideDataContext } from "../../contexts/AsideDataContext";
import toastNotify from "../../utils/toastNotify";

const Comment = () => {
  const { userLoginData, dispatch } = useContext(DataContext);
  const { addComment, setAddComment } = useContext(AsideDataContext);

  const [commentedText, setCommentedText] = useState("");

  return (
    <div>
      <div className="new-post-container comment">
        <div className="new-post-input">
          <img
            src={userLoginData?.avatarUrl}
            alt=""
            className="nav-profile-pic"
          />
          <textarea
            value={commentedText}
            type="text"
            placeholder="Add your comment!"
            onChange={(event) => setCommentedText(event.target.value)}
          ></textarea>
        </div>
        <hr />
        <div className="new-post-media">
          <button
            className="post-btn cta-btn left"
            onClick={() => {
              dispatch({
                type: "SET_COMMENT",
                payload: { data: commentedText, postData: addComment.post },
              });
              setAddComment({ ...addComment, show: false });
              toastNotify("success", "Comment added!");
            }}
          >
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
