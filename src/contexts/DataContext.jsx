import { createContext, useReducer } from "react";
import { initialValue, reducerFun } from "../reducers/dataReducer";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFun, initialValue);
  const [userPost, setUserPost] = useState([]);
  //   const { loginInput } = useContext(AuthContext);

  const likePost = async (postId, value) => {
    if (!value) {
      try {
        const response = await axios.post(
          `/api/posts/like/${postId}`,
          {},
          {
            headers: {
              authorization: localStorage.getItem("token"),
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
              authorization: localStorage.getItem("token"),
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

  console.log(state);

  const bookMarkPost = async (postId, value) => {
    if (!value) {
      try {
        const response = await axios.post(
          `/api/users/bookmark/${postId}`,
          {},
          {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }
        );
        dispatch({ type: "BOOKMARK_POST", payload: response.data.bookmarks });
        console.log(response);
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
              authorization: localStorage.getItem("token"),
            },
          }
        );
        dispatch({ type: "BOOKMARK_POST", payload: response.data.bookmarks });
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/users");
        dispatch({type:"GET_USERS",payload:response.data.users})
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  

  return (
    <DataContext.Provider value={{ state, dispatch, likePost, bookMarkPost,userPost, setUserPost }}>
      {children}
    </DataContext.Provider>
  );
};