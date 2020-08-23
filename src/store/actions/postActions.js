import Firebase from "firebase";

//const db = Firebase.firestore();

/* export const createPost = (post) => {
  return (dispatch) => {
    Firebase.firestore()
      .collection("posts")
      .add(post)
      .then(() => {
        dispatch({ type: "CREATE_POST_SUCCESSFUL" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_POST_ERROR" }, err);
      });
  };
}; */

/* ACTION CREATORS */

export const removePosts = () => {
  return { type: "REMOVE_ALL_POSTS" };
};

export const createPost = (post) => {
  return { type: "CREATE_NEW_POST", post: post };
};
