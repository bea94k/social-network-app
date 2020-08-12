import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Components/Layout/NavigationBar";
import Feed from "./Components/HomePage/Feed";
import LogIn from "./Components/Auth/LogIn";
import LogOut from "./Components/Auth/LogOut";
import Register from "./Components/Auth/Register";

function App() {
  return (
    <Router>
      <div className="deep-purple lighten-4">
        <NavigationBar />
        <h3>Welcome to SoMe, yet another social media platform.</h3>
        <main>
          <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/login" component={LogIn} />
            <Route path="/logout" component={LogOut} />
            <Route path="/register" component={Register} />
            {/* <Route path={"/blog/:postid"} component={Post} /> */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
