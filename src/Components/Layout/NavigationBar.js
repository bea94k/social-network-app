import React from "react";
import { connect } from "react-redux";

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
            {/* if the user is logged in (userLoggedIn true), show nav for logged in users, if user not logged in, show register and login btns */}
            {this.props.userLoggedIn ? (
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

const mapStateToProps = (state) => {
  return {
    userLoggedIn: state.auth.userLoggedIn,
  };
};

export default connect(mapStateToProps)(NavigationBar);
