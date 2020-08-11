import React from "react";
import PostSummary from "../Posts/PostSummary";

const AllPosts = () => {
  return (
    <div className="col s12 m8 blue">
      <h5>All Posts:</h5>
      <PostSummary />
      <PostSummary />
      <PostSummary />
      <PostSummary />
    </div>
  );
};

export default AllPosts;
