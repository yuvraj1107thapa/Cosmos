import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import toastNotify from "../utils/toastNotify";
import { useRef } from "react";

export const AsideDataContext = createContext();

export const AsideDataContextProvider = ({ children }) => {
  const [searchUser, setSearchUser] = useState("");
  const [editPost, setEditPost] = useState(false); //to open the dropdow for edit option
  const [editProfile, setEditProfile] = useState(false);
  const { encodedToken, dispatch, state, setUserLoginData, setCreatePost } =
    useContext(DataContext);

  const { editPostId } = useContext(DataContext);

  const deletePost = async (postId) => {
    console.log(encodedToken);
    try {
      const response = await axios.delete(`/api/posts/${postId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      dispatch({ type: "GET_POSTS", payload: response.data.posts });
      toastNotify("success", "Post Deleted successfully!");
    } catch (e) {
      console.log(e);
    }
  };

  const getPostData = async (id) => {
    try {
      const { data } = await axios.get(`/api/posts/${id}`);
      setCreatePost({ text: data.post.content, media: data.post.image });
      editPostId.current = data.post._id;
    } catch (e) {
      console.log(e);
    }
  };

  const followUser = async (Id) => {
    try {
      const response = await axios.post(
        `/api/users/follow/${Id}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      console.log("user", response);
      setUserLoginData(response.data.user);
      dispatch({ type: "GET_FOLLOWING", payload: response.data.followUser });
      dispatch({ type: "USER_TO_FOLLOW" });
      const res = await axios.get("/api/users");
      dispatch({ type: "GET_USERS", payload: res.data.users });
      console.log("follow", res.data.users);
    } catch (e) {
      console.log(e);
    }
  };

  const unfollowUser = async (Id) => {
    try {
      const response = await axios.post(
        `/api/users/unfollow/${Id}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setUserLoginData(response.data.user);
      dispatch({ type: "GET_FOLLOWING", payload: response.data.followUser });
      dispatch({ type: "USER_TO_FOLLOW" });
      console.log("unfollow", response);
      console.log("fo/uf", state);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AsideDataContext.Provider
      value={{
        searchUser,
        setSearchUser,
        editPost,
        getPostData,
        setEditPost,
        deletePost,
        followUser,
        unfollowUser,
        editProfile,
        setEditProfile,
      }}
    >
      {children}
    </AsideDataContext.Provider>
  );
};
