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

    case "CREATE_NEW_POST":
      console.log("A new post has been added to the Firestore.");
      return state;

    case "CREATE_NEW_POST_FAILED":
      console.log("An error has occured: " + action.err);
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

export default rootReducers;
