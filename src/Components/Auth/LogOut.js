import React from "react";
import { Link } from "react-router-dom";

const LogOut = () => {
  return (
    <div>
      <div className="center">
        <h5>You've been successfully logged out.</h5>
        <p>
          Unless you just entered the url. In that case, you just see this page,
          but the log out function was not triggered. Still logged in.
        </p>
        <Link to="/login" className="btn waves-effect waves-purple deep-purple">
          Log back in
        </Link>
      </div>
    </div>
  );
};

export default LogOut;
