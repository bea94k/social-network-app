import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../../store/actions/postActions";

class PostSummary extends React.Component {
  clickingTest = () => {
    console.log("it was clicked");
  };

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">{this.props.postData.title}</span>
          {/* <p>By: {this.props.postData.user}</p> */}
          <p>{this.props.postData.content}</p>
          {/* <p>{this.props.postData.time.toString()}</p> */}
          <button
            className="btn red"
            onClick={() => this.props.deletePost(this.props.postID)}
          >
            Delete this post
          </button>
          <p>
            Clicking the "delete" button deletes this post from the database. It
            is IRREVERSIBLE.
          </p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (postId) => dispatch(deletePost(postId)),
  };
};

export default connect(null, mapDispatchToProps)(PostSummary);
