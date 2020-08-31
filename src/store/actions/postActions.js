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
        dispatch({ type: "GET_ALL_POSTS_FAILED", error: err });
      });
  };
};

export const getPostByID = (postID) => {
  return (dispatch, getState, storeEnhancers) => {
    /* storeEnhanceers is {getFirestore(), getFirebase()}, as marked in index.js in applyMiddleware(thunk.withExtraArgument) */
    storeEnhancers
      .getFirestore()
      .collection("posts")
      .doc(postID)
      .get()
      .then((resp) => {
        dispatch({ type: "GET_POST_BY_ID", postData: resp.data() });
      })
      .catch((err) => {
        dispatch({ type: "GET_POST_BY_ID_FAILED", error: err });
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

export const deletePost = (postId) => {
  return (dispatch, getState, storeEnhancers) => {
    /* storeEnhanceers is {getFirestore(), getFirebase()}, as marked in index.js in applyMiddleware(thunk.withExtraArgument) */
    storeEnhancers
      .getFirestore()
      .collection("posts")
      .doc(postId)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_POST", deletedPostID: postId });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_POST_FAILED", error: err });
      });
  };
};

export const removePosts = () => {
  return { type: "REMOVE_ALL_POSTS" };
};

export const subscribeToChanges = () => {
  return (dispatch, getState, storeEnhancers) => {
    storeEnhancers
      .getFirestore()
      .collection("posts")
      .onSnapshot((changes) => {
        changes.docChanges().forEach((change) => {
          if (change.type === "added") {
            dispatch({
              type: "OBSERVED_POST_ADDED",
              post: { ...change.doc.data(), postID: change.doc.id },
            });
          }
          /* if (change.type === "removed") {
            dispatch({
              type: "OBSERVED_POST_REMOVED",
              post: change.doc.data(),
            });
          } */
        });
      });
  };
};

export const clearNotificationsInState = () => ({
  type: "CLEAR_NOTIFICATIONS_IN_STATE",
});

export const removeNotificationFromState = (deletedNotifPostID) => ({
  type: "REMOVE_NOTIFICATION_IN_STATE",
  deletedNotifPostID: deletedNotifPostID,
});
