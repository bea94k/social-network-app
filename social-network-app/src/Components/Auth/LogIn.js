import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      <div className="center">
        <h5>Log In</h5>
        <p>
          If you don't have an account yet,{" "}
          <Link to="/register">register here</Link>.
        </p>
      </div>
      <div className="container row">
        <div className="col s12 m8 offset-m2 l6 offset-l3">
          <div class="input-field">
            <input id="login-username" type="text" class="validate" />
            <label for="login-username">Username</label>
          </div>
          <div class="input-field">
            <input id="login-password" type="text" class="validate" />
            <label for="login-password">Password</label>
          </div>
          <button
            class="btn waves-effect waves-purple btn-large deep-purple"
            type="submit"
            name="action"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
