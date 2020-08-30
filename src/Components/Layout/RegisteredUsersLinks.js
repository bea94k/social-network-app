import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logUserOut } from "../../store/actions/authActions";

class RegisteredUsersLinks extends React.Component {
  render() {
    return (
      <div>
        <ul id="nav-mobile" className="right">
          <li>
            <NavLink to="/">Feed</NavLink>
          </li>
          <li>
            <NavLink to="/create">New Post</NavLink>
          </li>
          <li>
            <NavLink to="/logout" onClick={this.props.logOut}>
              Log Out
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logUserOut()),
  };
};

export default connect(null, mapDispatchToProps)(RegisteredUsersLinks);
