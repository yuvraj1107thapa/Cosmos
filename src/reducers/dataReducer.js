export const initialValue = {
    posts: [],
    users: [],
    likedPosts: [],
    bookmarkedPosts: [],
    userLoggedIn: "",
    filter: "",
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
  
      default: {
        return state;
      }
    }
  };
  