import React from "react";
import PostCard from "../../components/PostCard/PostCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState([]);

  const { postId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/posts/${postId}`);
        console.log(response.data);
        setSinglePost(response.data.post);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div>
      <div>
        <div>
          <PostCard data={singlePost} />
          {console.log("link", window.location.href)}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;