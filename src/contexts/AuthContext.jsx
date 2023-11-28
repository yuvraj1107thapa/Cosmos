import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toastNotify from "../utils/toastNotify";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { dispatch } = useContext(DataContext);
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
  });


  //signup state management
  const [signupInput, setSignupInput] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const loginHandler = async (creds) => {
    if (creds.username && creds.password) {
      try {
        const { data, status } = await axios.post("/api/auth/login", {
          username: creds.username,
          password: creds.password,
        });

        if (status === 200) {
          localStorage.setItem("token", data.encodedToken);
          dispatch({ type: "SET_USERNAME", payload: creds.username });
          navigate("/landing");
          toastNotify("success", "You're successfully logged in!");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      if (!creds.username && !creds.password) {
        toastNotify("error", "Please enter all the fields");
      } else if (!creds.username) {
        toastNotify("error", "username is empty");
      } else {
        toastNotify("error", "Password is empty");
      }
    }
  };

  //   const loginasGuest = () => {
  //     setLoginInput({ username: "bhumika27", password: "bhumi27" });
  //     loginHandler();
  //   };\

  const signupHandler = async () => {
    if (
      signupInput.firstname &&
      signupInput.lastname &&
      signupInput.username &&
      signupInput.password
    ) {
      try {
        const response = await axios.post("/api/auth/signup", {
          //   username: signupInput.username,
          //   password: signupInput.password,
          //   firstname: signupInput.firstname,
          //   lastname: signupInput.lastname,
          ...signupInput,
        });

        if (response.status === 201) {
          localStorage.setItem("token", response.data.encodedToken);
          navigate("/landing");
          // setUserLoggedIn(signupInput.username);
          toastNotify(
            "success",
            "Welcome to ShareMate! You're successfully signed up!"
          );
        }
      } catch (e) {
        console.log(e);
        toastNotify("error", "User already exists! Please select to login!");
      }
    } else {
      toastNotify("error", "Please enter all the fields");
      //   if (
      //     !signupInput.firstname &&
      //     !signupInput.lastname &&
      //     !signupInput.username &&
      //     !signupInput.password
      //   ) {
      //     toastNotify("error", "Please enter all the fields");
      //   } else if (!signupInput.firstname) {
      //     toastNotify("error", "Firstname is empty");
      //   } else if (!signupInput.lastname) {
      //     toastNotify("error", "Lastname is empty");
      //   } else if (!signupInput.username) {
      //     toastNotify("error", "username is empty");
      //   } else {
      //     toastNotify("error", "password is empty");
      //   }
    }
  };

  // useEffect(() => {
  //   dispatch({ type: "SET_USERNAME", payload: loginInput.username });
  // }, [loginInput.username]);

  return (
    <AuthContext.Provider
      value={{
        loginInput,
        setLoginInput,
        loginHandler,
        signupInput,
        setSignupInput,
        signupHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
