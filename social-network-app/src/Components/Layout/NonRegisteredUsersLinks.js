import React from "react";
import Register from "../Auth/Register";

const NonRegisteredUsersLinks = () => {
  return (
    <div>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <Register />
        </li>
      </ul>
    </div>
  );
};

export default NonRegisteredUsersLinks;
