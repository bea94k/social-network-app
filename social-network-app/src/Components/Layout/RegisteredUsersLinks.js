import React from "react";
import { NavLink } from "react-router-dom";

const RegisteredUsersLinks = () => {
  return (
    <div>
      <ul id="nav-mobile" className="right">
        {/* removed class  hide-on-med-and-down */}
        <li>
          <NavLink to="/logout">Log Out</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default RegisteredUsersLinks;
