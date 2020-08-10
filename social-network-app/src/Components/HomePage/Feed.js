import React from "react";
import AllPosts from "./AllPosts";
import Notifications from "./Notifications";

const Feed = () => {
  return (
    <div className="row">
      <Notifications />
      <AllPosts />
    </div>
  );
};

export default Feed;
