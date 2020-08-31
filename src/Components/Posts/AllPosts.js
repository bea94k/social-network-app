import React from "react";
import { connect } from "react-redux";
import { removePosts } from "../../store/actions/postActions";
import { getAllPosts } from "../../store/actions/postActions";

import PostSummary from "./PostSummary";

class AllPosts extends React.Component {
  componentDidMount() {
    this.props.getAllPosts();
  }
  render() {
    return (
      <div className="col s12 m8 blue">
        <p>
          The button below removes all posts from store, but not from database -
          they appear again after re-rendering the feed component
        </p>
        <button className="btn" onClick={this.props.removePosts}>
          Remove all posts
        </button>
        <h5>All Posts:</h5>
        {this.props.posts.length > 0 ? (
          this.props.posts.map((post) => (
            <PostSummary
              postData={post.data()}
              key={post.id}
              postID={post.id}
            />
          ))
        ) : (
          <h5>Loading...</h5>
        )}
      </div>
    );
  }
}

// pass a part of the state (from Redux store) to this component as props under the name of posts (props.posts)
const mapStateToProps = (state) => {
  return {
    userLoggedIn: state.auth.userLoggedIn,
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removePosts: () => dispatch(removePosts()),
    getAllPosts: () => dispatch(getAllPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
