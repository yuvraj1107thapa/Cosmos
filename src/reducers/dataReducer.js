export const initialValue = {
    posts: [],
    users: [],
    likedPosts: [],
    bookmarkedPosts: [],
    userLoggedIn: "",
    filter: "",
    following: [],
    userToFollow: [],
  };
  
  export const reducerFun = (state, action) => {
    switch (action.type) {
      case "GET_POSTS": {
        return { ...state, posts: action.payload };
      }
      case "GET_USERS": {
        return { ...state, users: action.payload };
      }
      case "LIKED_POST": {
        return { ...state, likedPosts: [...state.likedPosts, action.payload] };
      }
  
      case "DISLIKE_POST": {
        return {
          ...state,
          likedPosts: state.likedPosts.filter((id) => id !== action.payload),
        };
      }
  
      case "BOOKMARK_POST": {
        return {
          ...state,
          bookmarkedPosts: action.payload,
        };
      }
  
      case "SET_USERNAME": {
        return { ...state, userLoggedIn: action.payload };
      }
  
      case "RESET_ALL": {
        return { ...initialValue };
      }
  
      case "SET_FILTER": {
        return { ...state, filter: action.payload };
      }
  
      case "CLEAR_FILTER": {
        return { ...state, filter: "" };
      }
  
      case "GET_FOLLOWING": {
        const findUser = state?.following?.find(
          ({ username }) => username === action.payload.username
        );
        if (findUser) {
          return {
            ...state,
            following: state?.following?.filter(
              ({ username }) => username !== action.payload.username
            ),
          };
        } else {
          return { ...state, following: [...state.following, action.payload] };
        }
      }
  
      case "USER_TO_FOLLOW": {
        const userList = state?.users?.filter(
          ({ username }) => username !== localStorage.getItem("loggedUser")
        );
  
        const suggestedUserToFollow =
          state?.following.length !== 0
            ? userList?.filter(
                (data) => !state?.following?.find(({ _id }) => _id === data._id)
              )
            : userList;
        return { ...state, userToFollow: suggestedUserToFollow };
      }
      default: {
        return state;
      }
    }
  };