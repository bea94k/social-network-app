import React from "react";
import PostSummary from "./PostSummary";
import { connect } from "react-redux";

class AllPosts extends React.Component {
  render() {
    console.log("Received state from reducer");
    console.log(this.props.posts);
    return (
      <div className="col s12 m8 offset-m2 blue">
        <h5>All Posts:</h5>
        {this.props.posts ? (
          this.props.posts.map((post) => (
            <PostSummary postData={post} key={post.id} />
          ))
        ) : (
          <h5>Loading...</h5>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(AllPosts);
