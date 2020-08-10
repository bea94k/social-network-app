import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="center">
        <h5>Register</h5>
        <p>
          If you already have an account, <Link to="/login">log in here</Link>.
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
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
