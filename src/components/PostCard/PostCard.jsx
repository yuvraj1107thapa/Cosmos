import React, { useContext, useState } from "react";
import "./PostCard.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { DataContext } from "../../contexts/DataContext";

const PostCard = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const { state, likePost, bookMarkPost } = useContext(DataContext);

  //get like count of a post
  const likedCount = state.posts.find(({ _id }) => _id === data._id).likes
    .likeCount;
  console.log(likedCount);
  return (
    <div>
      <div className="post-container">
        <div className="post-title">
          <img
            src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1685259140/NegProjects/E-commerce/logo1_pskkes.jpg"
            alt=""
            className="nav-profile-pic"
          />

          <div>
            <p>
              <b>{data?.username}</b> {data?.createdAt}
            </p>
            <p>@{data?.username}</p>
          </div>
          <div id="three-dots">
            <MoreVertIcon />{" "}
          </div>
        </div>
        <div className="post-content">
          {data?.content}
          {data?.image && <img className="post-img" src={data?.image} alt="" />}
        </div>

        <hr />
        <div className="post-actions">
          <div
            className="post-icons"
            onClick={() => {
              likePost(data._id, isLiked);
              setIsLiked(!isLiked);
            }}
          >
            <div className="liked-counter-div">
              {" "}
              {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              {likedCount}
            </div>
          </div>
          <div className="post-icons">
            <ChatBubbleOutlineIcon />
          </div>
          <div
            className="post-icons"
            onClick={() => {
              bookMarkPost(data._id,isBookmarked);
              setIsBookmarked(!isBookmarked);
            }}
          >
            {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </div>
          <div className="post-icons">
            <ShareIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;