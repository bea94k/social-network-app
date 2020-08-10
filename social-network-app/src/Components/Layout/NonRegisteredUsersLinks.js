import React from "react";
import { Link } from "react-router-dom";

const NonRegisteredUsersLinks = () => {
  return (
    <div>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default NonRegisteredUsersLinks;
