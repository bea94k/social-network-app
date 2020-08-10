import React from "react";
import LogIn from "../Auth/LogIn";
import LogOut from "../Auth/LogOut";

const RegisteredUsersLinks = () => {
  return (
    <div>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <LogIn />
        </li>
        <li>
          <LogOut />
        </li>
      </ul>
    </div>
  );
};

export default RegisteredUsersLinks;
