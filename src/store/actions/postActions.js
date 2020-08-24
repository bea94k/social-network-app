/* ACTION CREATORS */

export const getAllPosts = () => {
  return (dispatch, getState, storeEnhancers) => {
    /* storeEnhanceers is {getFirestore(), getFirebase()}, as marked in index.js in applyMiddleware(thunk.withExtraArgument) */
    storeEnhancers
      .getFirestore()
      .collection("posts")
      .get()
      .then((resp) => {
        dispatch({ type: "GET_ALL_POSTS", postsArray: resp.docs });
      })
      .catch((err) => {
        console.log("error when getting all posts: ", err);
        //dispatch({ type: "CREATE_NEW_POST_FAILED", error: err });
      });
  };
};

export const createPost = (post) => {
  return (dispatch, getState, storeEnhancers) => {
    /* storeEnhanceers is {getFirestore(), getFirebase()}, as marked in index.js in applyMiddleware(thunk.withExtraArgument) */
    storeEnhancers
      .getFirestore()
      .collection("posts")
      .add(post)
      .then((resp) => {
        dispatch({ type: "CREATE_NEW_POST" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_NEW_POST_FAILED", error: err });
      });
  };
};

export const removePosts = () => {
  return { type: "REMOVE_ALL_POSTS" };
};
