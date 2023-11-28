import { createContext, useReducer } from "react";
import { initialValue, reducerFun } from "../reducers/dataReducer";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFun, initialValue);
  const [encodedToken, setEncodedToken] = useState(""); //gloabally access the local storage token
  const [userPost, setUserPost] = useState([]);
  const [userLoginData, setUserLoginData] = useState({});
  const [openModal, setOpenModal] = useState(false); //create post modal
  const [createPost, setCreatePost] = useState({ text: "", media: "" }); //to create ans post the data
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
        // console.log(response);
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
        // console.log(response);
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
    try {
      const response = await axios.post(
        "/api/posts",
        { postData: { content: postData.text, image: postData.media } }, //{..post} and {post}
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      console.log(response);
      dispatch({ type: "GET_POSTS", payload: response.data.posts });
    } catch (e) {}
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
      const valaue = state.users;
      const user = state?.users?.find(
        (usr) => usr.username === state.userLoggedIn
      );
      // const userList = await axios.get("/api/users");
      // const user = userList.data.users?.find(
      //   (usr) => usr.username === state.userLoggedIn
      // );
      console.log("gt user", user);
      // const response = await axios.get(`/api/users/${user._id}`);
      // console.log("check",response)
      setUserLoginData(user);
    } catch (e) {
      console.log(e);
    }
  };
  console.log("data", state);
  console.log("dataContext", userLoginData);

  useEffect(() => {
    const user = localStorage.getItem("loggedUser");
    dispatch({ type: "SET_USERNAME", payload: user });
  }, []);
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
