import React, { useContext } from "react";
import PostCard from "../../components/PostCard/PostCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CommentCard from "../../components/CommentCard/CommentCard";
import { DataContext } from "../../contexts/DataContext";

const SinglePost = () => {
  const { state } = useContext(DataContext);
  const { postId } = useParams();
  const singlePost = state?.posts.find(({ _id }) => _id.toString() === postId);

  return (
    <div>
      <div>
        <div style={{ marginTop: "2rem" }}>
          <PostCard data={singlePost} />
          {singlePost?.comment?.map((ele, index) => (
            <div key={index}>
              {" "}
              <CommentCard data={ele} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
