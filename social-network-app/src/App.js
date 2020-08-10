import React from "react";
import name from "./Components/Layout/NavigationBar";
import "./App.css";
import NavigationBar from "./Components/Layout/NavigationBar";
import Feed from "./Components/HomePage/Feed";

function App() {
  return (
    <div className="App deep-purple lighten-4">
      <NavigationBar />
      <h3>Henlo. Welcome to SoMe, yet another social media platform.</h3>
      <div>
        <Feed />
      </div>
    </div>
  );
}

export default App;
