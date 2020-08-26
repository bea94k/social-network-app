const initialState = {
  posts: [],
  userData: {},
  userActionErr: null,
};

const rootReducers = (state = initialState, action) => {
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

    case "LOG_IN_SUCCESS":
      return {
        ...state,
        userData: action.userData,
      };

    case "LOG_IN_FAILED":
      console.log("An error has occured: " + action.error);
      return {
        ...state,
        userActionErr: action.error,
        // or is it action.error.message ?
      };

    default:
      return state;
  }
};

export default rootReducers;
