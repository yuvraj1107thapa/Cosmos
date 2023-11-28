import { createContext, useContext, useReducer } from "react";
import { initialValue, reducerFun } from "../reducers/dataReducer";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFun, initialValue);
  //   const { loginInput } = useContext(AuthContext);

  const likePost = async (postId, value) => {
    // console.log(loginInput.username); //need to have a global variable
    // // const likedByPerson = state.posts.find()
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
        console.log(response);
        dispatch({ type: "GET_POSTS", payload: response.data.posts });
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
        console.log(response);
        dispatch({ type: "GET_POSTS", payload: response.data.posts });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const bookMarkPost = async (postId,value) => {
    if(!value){
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
            console.log(response);
          } catch (e) {
            console.log(e);
          }        
    } else{
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
            console.log(response);
          } catch (e) {
            console.log(e);
          }
    }

  };

  return (
    <DataContext.Provider value={{ state, dispatch, likePost, bookMarkPost }}>
      {children}
    </DataContext.Provider>
  );
};