import React from "react";

const NewPost = () => {
  return (
    <div className="container row">
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <form>
          <div className="input-field">
            <input id="postTitle" type="text" />
            <label for="postTitle">Post Title:</label>
          </div>
          <div className="input-field">
            <textarea
              id="postContent"
              className="materialize-textarea"
            ></textarea>
            <label for="postContent">Post:</label>
          </div>
          <button
            class="btn waves-effect waves-purple btn-large deep-purple"
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
