import React from "react";
import PostSummary from "./PostSummary";
import { connect } from "react-redux";
import { removePosts } from "../../store/actions/postActions";
import { getAllPosts } from "../../store/actions/postActions";

class AllPosts extends React.Component {
  componentDidMount() {
    this.props.getAllPosts();
  }
  render() {
    console.log("Received state from reducer");
    console.log(this.props.posts);
    return (
      <div className="col s12 m8 offset-m2 blue">
        <button className="btn" onClick={this.props.removePost}>
          Remove all posts
        </button>
        <h5>All Posts:</h5>
        {this.props.posts.length > 0 ? (
          this.props.posts.map((post) => (
            <PostSummary postData={post.data()} key={post.id} />
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
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removePost: () => dispatch(removePosts()),
    getAllPosts: () => dispatch(getAllPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
