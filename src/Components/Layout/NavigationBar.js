import React from "react";
import Logo from "./Logo";
import NonRegisteredUsersLinks from "./NonRegisteredUsersLinks";
import RegisteredUsersLinks from "./RegisteredUsersLinks";

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="deep-purple darken-4">
          <div className="nav-wrapper">
            <Logo />
            {/* if the user is logged in (uid not null), show only log out btn, if user not logged in, show register and login btns */}
            {this.props.uid ? (
              <RegisteredUsersLinks />
            ) : (
              <NonRegisteredUsersLinks />
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
