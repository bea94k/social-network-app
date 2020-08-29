import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";
import { Redirect } from "react-router-dom";

class NewPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postTitle: null,
      postContent: null,
      posted: false,
    };

    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmission = (e) => {
    e.preventDefault();
    this.props.createPost({
      title: this.state.postTitle,
      content: this.state.postContent,
    });
    this.setState({ posted: true });
  };

  render() {
    return (
      <>
        {this.props.userLoggedIn ? (
          <div className="container row">
            {/* after the post is submitted, state.posted changed to true, redirect to feed; if not posted, continue to render new post form */}
            {this.state.posted ? <Redirect to="/" /> : ""}
            <div className="col s12 m8 offset-m2 l6 offset-l3">
              <form onSubmit={this.handleSubmission}>
                <div className="input-field">
                  <input
                    id="postTitle"
                    type="text"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="postTitle">Post Title:</label>
                </div>
                <div className="input-field">
                  <textarea
                    id="postContent"
                    className="materialize-textarea"
                    onChange={this.handleChange}
                  ></textarea>
                  <label htmlFor="postContent">Post:</label>
                </div>
                <button
                  className="btn waves-effect waves-purple btn-large deep-purple"
                  type="submit"
                  name="action"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { userLoggedIn: state.auth.userLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
