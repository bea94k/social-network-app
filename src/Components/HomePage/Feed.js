import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AllPosts from "../Posts/AllPosts";
import Notifications from "./Notifications";

class Feed extends React.Component {
  render() {
    return (
      <>
        {this.props.userLoggedIn ? (
          <div className="row">
            <AllPosts />
            <Notifications />
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </>
    );
  }
}

/* class Feed extends React.Component {
  render() {
    return (
      <div className="row">
        <AllPosts />
        <Notifications />
      </div>
    );
  }
} */

const mapStateToProps = (state) => {
  return {
    userLoggedIn: state.auth.userLoggedIn,
  };
};

export default connect(mapStateToProps)(Feed);
