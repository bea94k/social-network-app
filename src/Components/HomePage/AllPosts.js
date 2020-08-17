import React from "react";
import PostSummary from "../Posts/PostSummary";
import Firebase from "firebase";

class AllPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }

  componentDidMount = () => {
    Firebase.firestore()
      .collection("posts")
      .get()
      .then((resp) => {
        this.setState({
          posts: resp.docs,
        });
        /* console.log(resp.docs[0].data());
        console.log(resp.docs[0].id); */
      })
      .catch((err) => {
        console.log("Error when getting all posts:", err);
      });
  };

  render() {
    return (
      <div className="col s12 m8 offset-m2 blue">
        <h5>All Posts:</h5>
        {this.state.posts ? (
          this.state.posts.map((post) => (
            <PostSummary postData={post.data()} key={post.id} />
          ))
        ) : (
          <h5>Loading...</h5>
        )}
      </div>
    );
  }
}

export default AllPosts;
