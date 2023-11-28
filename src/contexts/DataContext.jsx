import { createContext, useReducer } from "react";
import { initialValue, reducerFun } from "../reducers/dataReducer";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";
import toastNotify from "../utils/toastNotify";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFun, initialValue);
  const [encodedToken, setEncodedToken] = useState(""); //gloabally access the local storage token
  const [userLoggedIn, setUserLoggedIn] = useState(""); //gloabally access the local storage token
  const [userPost, setUserPost] = useState([]);
  const [userLoginData, setUserLoginData] = useState({});
  const [openModal, setOpenModal] = useState(false); //create post modal
  const [createPost, setCreatePost] = useState({ text: "", media: "" }); //to create ans post the data
  const editPostId = useRef("");

  console.log("context",userLoginData)
  const likePost = async (postId, value) => {
    if (!value) {
      try {
        const response = await axios.post(
          `/api/posts/like/${postId}`,
          {},
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        dispatch({ type: "GET_POSTS", payload: response.data.posts });
        dispatch({ type: "LIKED_POST", payload: postId });
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const response = await axios.post(
          `/api/posts/dislike/${postId}`,
          {},
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        dispatch({ type: "GET_POSTS", payload: response.data.posts });
        dispatch({ type: "DISLIKE_POST", payload: postId });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const bookMarkPost = async (postId, value) => {
    if (!value) {
      try {
        const response = await axios.post(
          `/api/users/bookmark/${postId}`,
          {},
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        dispatch({ type: "BOOKMARK_POST", payload: response.data.bookmarks });
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const response = await axios.post(
          `/api/users/remove-bookmark/${postId}`,
          {},
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        dispatch({ type: "BOOKMARK_POST", payload: response.data.bookmarks });
        // console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const createPostHandler = async (postData) => {
    if (postData.text || postData.media) {
      const findPost = state?.posts?.find(
        ({ _id }) => _id === editPostId.current
      );
      // console.log("edit", findPost);
      if (findPost) {
        try {
          const response = await axios.post(
            `/api/posts/edit/${editPostId.current}`,
            {
              postData: { content: postData.text, image: postData.media },
            },
            {
              headers: {
                authorization: encodedToken,
              },
            }
          );
          //update the posts with the edited content
          dispatch({ type: "GET_POSTS", payload: response.data.posts });
          toastNotify("success", "Updated successfully!");
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          const response = await axios.post(
            "/api/posts",
            {
              postData: {
                content: postData.text,
                image: postData.media,
              },
            }, //{..post} and {post}
            {
              headers: {
                authorization: encodedToken,
              },
            }
          );
          console.log("new post", response);
          dispatch({ type: "GET_POSTS", payload: response.data.posts });
          toastNotify("success", "Posted successfully!");
        } catch (e) {
          console.log(e);
        }
      }
    } else {
      toastNotify("error", "Add content to post");
    }
  };

  const setFilter = (value) => {
    dispatch({ type: "SET_FILTER", payload: value });
  };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get("/api/users");
  //       dispatch({ type: "GET_USERS", payload: response.data.users });
  //       // console.log("users in context", response);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();
  // }, []);

  const getUserLoggedInData = async () => {
    try {
      const user = state?.users?.find((usr) => usr.username === userLoggedIn);
      // const userList = await axios.get("/api/users");
      // const user = userList.data.users?.find(
      //   (usr) => usr.username === userLoggedIn
      // );
      // console.log("gt user", user);
      // const response = await axios.get(`/api/users/${user._id}`);
      // console.log("check",response)
      setUserLoginData(user);
    } catch (e) {
      console.log(e);
    }
  };
  console.log("new", state);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        likePost,
        bookMarkPost,
        userPost,
        setUserPost,
        userLoginData,
        setUserLoginData,
        getUserLoggedInData,
        createPostHandler,
        setFilter,
        openModal,
        setOpenModal,
        encodedToken,
        setEncodedToken,
        createPost,
        setCreatePost,
        editPostId,
        userLoggedIn,
        setUserLoggedIn,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};