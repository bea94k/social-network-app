import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

const initialState = {
  posts: [],
  userData: {},
  userLoggedIn: false,
  userActionErr: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        userData: action.userData,
        userLoggedIn: true,
      };

    case "LOG_IN_FAILED":
      console.log("An error has occured: " + action.error);
      return {
        ...state,
        userActionErr: action.error,
        // or is it action.error.message ?
      };

    case "LOG_OUT_SUCCESS":
      return {
        ...state,
        userLoggedIn: false,
        userData: {},
      };

    default:
      return state;
  }
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_POSTS":
      console.log("Getting all posts from the Firestore...");
      return {
        ...state,
        posts: action.postsArray,
      };

    case "GET_ALL_POSTS_FAILED":
      console.log("An error has occured: " + action.error);
      return {
        ...state,
        userActionErr: action.error,
        // or is it action.error.message ?
      };

    case "CREATE_NEW_POST":
      console.log("A new post has been added to the Firestore.");
      return state;

    case "CREATE_NEW_POST_FAILED":
      console.log("An error has occured: " + action.error);
      return {
        ...state,
        userActionErr: action.error,
        // or is it action.error.message ?
      };

    case "DELETE_POST":
      console.log("Deleted post ID: " + action.deletedPostID);
      let updatedPostArray = state.posts.filter(
        (item) => item.id !== action.deletedPostID
      );
      return {
        ...state,
        posts: updatedPostArray,
      };

    case "DELETE_POST_FAILED":
      console.log("An error has occured: " + action.error);
      return {
        ...state,
        userActionErr: action.error,
        // or is it action.error.message ?
      };

    case "REMOVE_ALL_POSTS":
      return {
        ...state,
        posts: [],
      };

    default:
      return state;
  }
};

const rootReducers = combineReducers({
  auth: authReducer,
  posts: postReducer,
  firebase: firebaseReducer,
});

export default rootReducers;
