import React from "react";
import "./PostCard.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";

const PostCard = () => {
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
              <b>Yuvraj Thapa</b> June 10th 2023
            </p>
            <p>@username</p>
          </div>
          <div id="three-dots">
            <MoreVertIcon />{" "}
          </div>
        </div>
        <div className="post-content">
          content of post Browse through the icons below to find the one you
          need. The search field supports synonyms—for example, try searching
          for "hamburger" or "logout."
          <img className="post-img"
            src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393956/NegProjects/E-commerce/Orchids/orch_fwftgt.avif"
            alt=""
          />
        </div>

        <hr />
        <div className="post-actions">
          <div className="post-icons">
            <FavoriteBorderIcon />
          </div>
          <div className="post-icons">
            <ChatBubbleOutlineIcon />
          </div>
          <div className="post-icons">
            <BookmarkBorderIcon />
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