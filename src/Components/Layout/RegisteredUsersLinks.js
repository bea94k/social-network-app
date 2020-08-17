import React from "react";
import { NavLink } from "react-router-dom";
import Firebase from "firebase";

class RegisteredUsersLinks extends React.Component {
  logOut = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        return console.log("Successfully logged out");
      })
      .catch((err) => {
        console.log("Error when logging out:", err);
      });
  };

  render() {
    return (
      <div>
        <ul id="nav-mobile" className="right">
          {/* removed class  hide-on-med-and-down */}
          <li>
            <NavLink to="/">Feed</NavLink>
          </li>
          <li>
            <NavLink to="/create">New Post</NavLink>
          </li>
          <li>
            <NavLink to="/logout" onClick={this.logOut}>
              Log Out
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default RegisteredUsersLinks;
