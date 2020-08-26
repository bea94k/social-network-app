/* ACTION CREATORS */

export const logUserIn = (user) => {
  return (dispatch, getState, storeEnhancers) => {
    storeEnhancers
      .getFirebase()
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((resp) => {
        console.log("Trying to get user's data based on the email");
        storeEnhancers
          .getFirestore()
          .collection("users")
          .doc(resp.user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              dispatch({
                type: "LOG_IN_SUCCESS",
                userData: {
                  uid: doc.id,
                  email: doc.data().email,
                  firstname: doc.data().firstname,
                  lastname: doc.data().lastname,
                  phone: doc.data().phone,
                },
              });
            } else {
              // doc.data() will be undefined in this case
              console.log(
                "Error when getting user's data from DB based on logged user's ID."
              );
            }
          });
      })
      .catch((err) => {
        dispatch({ type: "LOG_IN_FAILED", error: err });
      });
  };
};