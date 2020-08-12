import React from "react";
import { NavLink } from "react-router-dom";

const NonRegisteredUsersLinks = () => {
  return (
    <div>
      <ul id="nav-mobile" className="right">
        {/* removed class  hide-on-med-and-down */}
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
