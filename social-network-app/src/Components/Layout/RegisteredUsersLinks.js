import React from "react";
import { Link } from "react-router-dom";

const RegisteredUsersLinks = () => {
  return (
    <div>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/logout">Log Out</Link>
        </li>
      </ul>
    </div>
  );
};

export default RegisteredUsersLinks;
