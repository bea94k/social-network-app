import React, { useState } from "react";

const NewPost = () => {
  const [newPost, setNewPost] = useState({
    postTitle: null,
    postContent: null,
  });

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(newPost);
  };

  return (
    <div className="container row">
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <form onSubmit={handleSubmission}>
          <div className="input-field">
            <input id="postTitle" type="text" onChange={handleChange} />
            <label htmlFor="postTitle">Post Title:</label>
          </div>
          <div className="input-field">
            <textarea
              id="postContent"
              className="materialize-textarea"
              onChange={handleChange}
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
};

export default NewPost;
