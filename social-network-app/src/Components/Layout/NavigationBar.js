import React from "react";
import Logo from "./Logo";
import NonRegisteredUsersLinks from "./NonRegisteredUsersLinks";
import RegisteredUsersLinks from "./RegisteredUsersLinks";

const NavigationBar = () => {
  return (
    <div>
      <nav className="deep-purple darken-4">
        <div class="nav-wrapper">
          <Logo />
          <NonRegisteredUsersLinks />
          <RegisteredUsersLinks />
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
