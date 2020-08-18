import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Firebase from "firebase";
import { FIREBASE_CONFIG as firebaseConfig } from "./config/firebaseConfig";

/* components and css */
import "./App.css";
import NavigationBar from "./Components/Layout/NavigationBar";
import Feed from "./Components/HomePage/Feed";
import LogIn from "./Components/Auth/LogIn";
import LogOut from "./Components/Auth/LogOut";
import Register from "./Components/Auth/Register";
import PostDetails from "./Components/Posts/PostDetails";
import NewPost from "./Components/Posts/NewPost";

/* FIREBASE */

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
Firebase.analytics();

// telling the app to use the database of Firestore
const db = Firebase.firestore();

// which collection you want to access, method - returns a promise
db.collection("posts")
  .get()
  .then((resp) => {
    console.log("ALL IS OKAAAAY");
    /* console.log("Check if DB is connected - resp.docs[0].data is: ");
    console.log(resp.docs[0].data()); */
  })
  .catch((err) => {
    console.log("Error while getting the data from db:" + err);
  });

function App() {
  return (
    <Router>
      <div className="deep-purple lighten-4">
        <NavigationBar></NavigationBar>
        <h3>Welcome to SoMe, yet another social media platform.</h3>
        <main>
          <Switch>
            <Route exact path="/" component={Feed}></Route>
            <Route exact path="/create" component={NewPost}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={LogIn}></Route>
            <Route exact path="/logout" component={LogOut}></Route>
            <Route exact path="/post/:id" component={PostDetails}></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
