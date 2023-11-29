import React, { useContext } from "react";
import PostCard from "../../components/PostCard/PostCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CommentCard from "../../components/CommentCard/CommentCard";
import { DataContext } from "../../contexts/DataContext";

const SinglePost = () => {
  // const [singlePost, setSinglePost] = useState([]);
  const { state } = useContext(DataContext);
  const { postId } = useParams();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get(`/api/posts/${postId}`);
  //       console.log(response.data);
  //       setSinglePost(response.data.post);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();
  // }, []);

  const singlePost = state?.posts.find(({ _id }) => _id.toString() === postId);

  return (
    <div>
      <div>
        <div>
          <PostCard data={singlePost} />
          {singlePost?.comment?.map((ele) => (
            <CommentCard data={ele} />
          ))}
          {console.log("link", window.location.href)}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;