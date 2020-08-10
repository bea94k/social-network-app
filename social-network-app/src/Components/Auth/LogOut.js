import React from "react";
import { Link } from "react-router-dom";

const LogOut = () => {
  return (
    <div>
      <div className="center">
        <h5>You've been successfully logged out.</h5>
        <Link to="/login" className="btn waves-effect waves-purple deep-purple">
          Log back in
        </Link>
      </div>
    </div>
  );
};

export default LogOut;
