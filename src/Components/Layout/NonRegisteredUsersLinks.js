import React from "react";
import { NavLink } from "react-router-dom";

const NonRegisteredUsersLinks = () => {
  return (
    <div>
      <ul id="nav-mobile" className="right">
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NonRegisteredUsersLinks;
