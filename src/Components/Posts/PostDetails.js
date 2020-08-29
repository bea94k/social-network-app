import React from "react";
import { Link, Redirect } from "react-router-dom";
import { getPostByID } from "../../store/actions/postActions";
import moment from "moment";
import { connect } from "react-redux";

class PostDetails extends React.Component {
  componentDidMount() {
    let singlePostId = this.props.match.params.postId;

    this.props.getPostByID(singlePostId);
  }

  render() {
    return (
      <>
        {this.props.userLoggedIn ? (
          <>
            <Link to="/">
              <button className="btn purple">Back to all posts</button>
            </Link>

            <div className="container">
              {!this.props.foundPost.hasOwnProperty("title") ? (
                <h1>Loading...</h1>
              ) : (
                <div className="card">
                  <div className="card-content">
                    <h5>{this.props.foundPost.title}</h5>
                    <p>
                      By {this.props.foundPost.authorFirstname}{" "}
                      {this.props.foundPost.authorLastname}
                    </p>
                    <p>
                      {moment
                        .unix(this.props.foundPost.date.seconds)
                        .format("Do MMM YYYY, h:mm a")}
                    </p>
                    <h5>{this.props.foundPost.content}</h5>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    foundPost: state.posts.singlePost,
    userLoggedIn: state.auth.userLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getPostByID: (postID) => dispatch(getPostByID(postID)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
