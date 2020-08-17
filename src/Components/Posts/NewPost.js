import React from "react";
import Firebase from "firebase";
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
    console.log(this.state);
    // add a new document to collection "posts"
    Firebase.firestore()
      .collection("posts")
      .add({
        title: this.state.postTitle,
        content: this.state.postContent,
        time: new Date(),
        user: Firebase.auth().currentUser.uid,
      })
      .then(() => {
        this.setState({ posted: true });
        console.log("New post created");
      })
      .catch((err) => {
        console.error("Error adding document-post: ", err);
      });
  };

  render() {
    return (
      <div className="container row">
        {/* if it has been posted, redirect to home/feed, if posted still false, go on with reading hte code */}
        {this.state.posted ? <Redirect to="/" /> : ""}
        {!this.props.uid ? (
          <Redirect to="/login" />
        ) : (
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
        )}
      </div>
    );
  }
}

export default NewPost;
