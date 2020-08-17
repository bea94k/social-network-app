import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Firebase from "firebase";
import { FIREBASE_CONFIG as firebaseConfig } from "./config/firebaseConfig";
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
    console.log("Check if DB is connected - resp.docs[0].data is: ");
    console.log(resp.docs[0].data());
  })
  .catch((err) => {
    console.log("Error while getting the data from db:" + err);
  });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
    };
  }

  render() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user && this.state.uid === null) {
        // user has just logged in, update the user ID
        this.setState({
          uid: user.uid,
        });
        console.log(user);
      } else if (!user && this.state.uid !== null) {
        // user has just logged out, clear the saved userID
        this.setState({
          uid: null,
        });
        console.log(user);
      }
    });
    return (
      <Router>
        <div className="deep-purple lighten-4">
          <NavigationBar uid={this.state.uid} />
          <h3>Welcome to SoMe, yet another social media platform.</h3>
          <main>
            <Switch>
              <Route path="/" exact component={Feed} />
              <Route path="/login" component={LogIn} />
              <Route path="/logout" exact component={LogOut} />
              <Route path="/register" exact component={Register} />
              <Route path={"/post/:id"} component={PostDetails} />
              <Route path={"/create"} component={NewPost} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
