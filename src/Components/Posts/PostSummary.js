import React from "react";

class PostSummary extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">{this.props.postData.title}</span>
          {/* <p>By: {this.props.postData.user}</p> */}
          <p>{this.props.postData.content}</p>
          {/* <p>{this.props.postData.time.toString()}</p> */}
        </div>
      </div>
    );
  }
}

export default PostSummary;
