import React from "react";
import { NavLink } from "react-router-dom";
import Firebase from "firebase";

const onLogOut = () => {
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
          <button
            className="btn waves-effect waves-purple deep-purple"
            onClick={onLogOut}
          >
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default RegisteredUsersLinks;
