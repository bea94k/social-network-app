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

// pass a part of the state (from Redux store) to this component as props under the name of posts (props.posts)
/* const mapStateToProps = (state) => {
  return {};
}; */

// put the dispatched action in the component props (under a name, here props.createPost)

//when to dispatch the action
// what is the name of the props to be called so that the action is dispatched
// is there a payload to be dispatched together with the action
const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  };
};

// since mapStateToProps is empty, not used, not needed, "skip" it with null and pass just mapDispatch
export default connect(/* mapStateToProps */ null, mapDispatchToProps)(NewPost);
