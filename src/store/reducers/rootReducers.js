import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

const initialState = {
  posts: [],
  notifications: [],
  singlePost: {},
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
      console.log("An error has occured when logging in: " + action.error);
      return {
        ...state,
        userActionErr: action.error,
        // or is it action.error.message ?
      };

    case "REGISTRATION_FAILED":
      console.log("An error has occured when registering: " + action.error);
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

    case "LOG_OUT_FAILED":
      console.log("An error has occured when logging in: " + action.error);
      return {
        ...state,
        userActionErr: action.error,
        // or is it action.error.message ?
      };

    default:
      return state;
  }
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_POSTS":
      return {
        ...state,
        posts: action.postsArray,
        singlePost: {},
      };

    case "GET_ALL_POSTS_FAILED":
      console.log("An error has occured: " + action.error);
      return {
        ...state,
        userActionErr: action.error,
        // or is it action.error.message ?
      };

    case "GET_POST_BY_ID":
      return {
        ...state,
        singlePost: action.postData,
      };

    case "GET_POST_BY_ID_FAILED":
      console.log("An error has occured: " + action.error);
      return {
        ...state,
        userActionErr: action.error,
        // or is it action.error.message ?
      };

    case "CREATE_NEW_POST":
      return state;

    case "CREATE_NEW_POST_FAILED":
      console.log("An error has occured: " + action.error);
      return {
        ...state,
        userActionErr: action.error,
        // or is it action.error.message ?
      };

    case "DELETE_POST":
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

    case "OBSERVED_POST_ADDED":
      return {
        ...state,
        notifications: [...state.notifications, action.post],
      };

    case "CLEAR_NOTIFICATIONS_IN_STATE":
      return {
        ...state,
        notifications: [],
      };

    case "REMOVE_NOTIFICATION_IN_STATE":
      let updatedNotificationsArray = state.notifications.filter(
        (item) => item.date.seconds !== action.deletedNotifTimestamp
      );
      return {
        ...state,
        notifications: updatedNotificationsArray,
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
