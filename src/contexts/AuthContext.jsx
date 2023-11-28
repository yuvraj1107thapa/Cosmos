import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import toastNotify from "../utils/toastNotify";
import { useContext } from "react";
import { DataContext } from "./DataContext";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const {
    dispatch,
    setEncodedToken,
    setUserLoggedIn,
    setUserLoginData,
    userLoginData,
  } = useContext(DataContext);
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
  const location = useLocation();

  const loginHandler = async (creds) => {
    if (creds.username && creds.password) {
      try {
        const { data, status } = await axios.post("/api/auth/login", {
          username: creds.username,
          password: creds.password,
        });

        if (status === 200) {
          localStorage.setItem("token", data.encodedToken);
          localStorage.setItem("loggedUser", data.foundUser.username);
          localStorage.setItem("userData", JSON.stringify(data.foundUser));
          setEncodedToken(data.encodedToken);
          setUserLoggedIn(data.foundUser.username);
          setUserLoginData(JSON.parse(localStorage.getItem("userData")));
          navigate(location?.state?.from?.pathname ?? "/landing");
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
          avatarUrl:
            "https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433601/NegProjects/SocialMedia/man_2_hjk6pd.png",
        });
        console.log("signup", response);
        if (response.status === 201) {
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem(
            "loggedUser",
            response.data.createdUser.username
          );
          // const user = {
          //   ...response.data.createdUser,
          //   avatarUrl:
          //     "https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433601/NegProjects/SocialMedia/man_2_hjk6pd.png",
          // };
          localStorage.setItem(
            "userData",
            JSON.stringify(response.data.createdUser)
          );
          setEncodedToken(response.data.encodedToken);
          setUserLoggedIn(response.data.createdUser.username);
          setUserLoginData(JSON.parse(localStorage.getItem("userData")));
          // setUserLoginData(response.data.createdUser);
          navigate("/landing");
          const res = await axios.get("/api/users");
          dispatch({ type: "GET_USERS", payload: res.data.users });
          toastNotify(
            "success",
            "Welcome to Cosmos! You're successfully signed up!"
          );
        }
      } catch (e) {
        console.log(e);
        toastNotify("error", "User already exists! Please select to login!");
      }
    } else {
      toastNotify("error", "Please enter all the fields");
    }
  };

  useEffect(() => {
    console.log("json", userLoginData);
  }, [userLoginData]);

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