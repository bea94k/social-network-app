import React from "react";
import AllPosts from "../Posts/AllPosts";
import Notifications from "./Notifications";

const Feed = () => {
  return (
    <div className="row">
      <AllPosts />
      <Notifications />
    </div>
  );
};

export default Feed;
