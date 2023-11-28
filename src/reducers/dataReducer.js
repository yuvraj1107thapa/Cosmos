export const initialValue = {
    posts: [],
    users: [],
  };
  
  export const reducerFun = (state, action) => {
    switch (action.type) {
      case "GET_POSTS": {
        return { ...state, posts: action.payload };
      }
      default: {
        return state;
      }
    }
  };