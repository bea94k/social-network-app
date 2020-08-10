import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="brand-logo left">
        SoMe
      </Link>
    </div>
  );
};

export default Logo;
