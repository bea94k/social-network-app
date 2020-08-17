import React from "react";
import { NavLink } from "react-router-dom";
import Firebase from "firebase";

const logOut = () => {
  Firebase.auth()
    .signOut()
    .then(() => {
      return console.log("Successfully logged out");
    })
    .catch((err) => {
      console.log("Error when logging out:", err);
    });
};

const RegisteredUsersLinks = () => {
  return (
    <div>
      <ul id="nav-mobile" className="right">
        {/* removed class  hide-on-med-and-down */}
        <li>
          {/* <NavLink to="/logout">Log Out</NavLink> */}
          <NavLink to="/logout" onClick={logOut}>
            Log Out
          </NavLink>
        </li>
        <li>
          <NavLink to="/create">New Post</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default RegisteredUsersLinks;
