import React from "react";
import AllPosts from "./AllPosts";
import { Redirect } from "react-router-dom";

const Feed = (props) => {
  return (
    <div className="row">
      {props.uid ? <AllPosts /> : <Redirect to="/login" />}
    </div>
  );
};

export default Feed;
