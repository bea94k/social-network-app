import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";

class NewPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postTitle: null,
      postContent: null,
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
  };

  render() {
    return (
      <div className="container row">
        <div className="col s12 m8 offset-m2 l6 offset-l3">
          <form onSubmit={this.handleSubmission}>
            <div className="input-field">
              <input id="postTitle" type="text" onChange={this.handleChange} />
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
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
