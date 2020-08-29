import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deletePost } from "../../store/actions/postActions";
import moment from "moment";

class PostSummary extends React.Component {
  clickingTest = () => {
    console.log("it was clicked");
  };

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">{this.props.postData.title}</span>
          <p>
            By: {this.props.postData.authorFirstname}{" "}
            {this.props.postData.authorLastname}
          </p>
          {/* <p>{this.props.postData.content}</p> */}
          <p>
            {moment
              .unix(this.props.postData.date.seconds)
              .format("Do MMM YYYY, h:mm a")}
          </p>
          <button
            className="btn red"
            onClick={() => this.props.deletePost(this.props.postID)}
          >
            Delete this post
          </button>
          <Link to={"/post/" + this.props.postID}>
            <button className="btn green">Read more</button>
          </Link>
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
